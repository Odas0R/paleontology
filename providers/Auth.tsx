import { Session, User } from "@supabase/supabase-js";
import { db } from "lib";
import { useRouter } from "next/router";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export interface AuthContextInterface {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
}

export type AuthContextProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextInterface>(undefined!);

export const AuthContextProvider = ({ children }: AuthContextProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const signInWithGoogle = async () => {
    setLoading(true);
    try {
      const { error } = await db.auth.signIn({
        provider: "google",
      });

      if (error) throw error;
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    setLoading(true);
    try {
      const { error } = await db.auth.signOut();
      if (error) throw error;

      // remove auth cookie
      await fetch("/api/auth/remove-cookie", {
        method: "GET",
        credentials: "same-origin",
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setUser(db.auth.user() || null);
    setSession(db.auth.session() || null);

    const { data: authListener } = db.auth.onAuthStateChange(
      async (event, session) => {
        const newUser = db.auth.user();

        if (newUser) {
          await fetch("/api/auth/set-cookie", {
            method: "POST",
            headers: new Headers({ "Content-Type": "application/json" }),
            credentials: "same-origin",
            body: JSON.stringify({ event, session }),
          });
        }

        setUser(db.auth.user() || null);
        setSession(db.auth.session() || null);

        switch (event) {
          case "SIGNED_IN":
            setTimeout(() => router.push("/dashboard"), 500);
            break;
          case "SIGNED_OUT":
            setTimeout(() => router.push("/"), 500);
            break;
        }
      },
    );

    return () => {
      authListener?.unsubscribe();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const value: AuthContextInterface = {
    session,
    user,
    loading,
    signInWithGoogle,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthContext.Provider");
  }
  return context;
};
