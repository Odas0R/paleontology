/* eslint-disable */
import type { NextFetchEvent, NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function middleware(req: NextRequest, _ev: NextFetchEvent) {
  let { user, error } = await getUser(req);

  if (error) {
    console.error(error);
    return NextResponse.redirect(
      `/?ret=${encodeURIComponent(req.nextUrl.pathname)}`,
    );
  } else if (!user) {
    console.log("NO USER FOUND");
    return NextResponse.redirect(
      `/?ret=${encodeURIComponent(req.nextUrl.pathname)}`,
    );
  } else {
    return NextResponse.next();
  }
}

async function getUser(req: NextRequest): Promise<any> {
  let token = req.cookies["sb:token"];
  if (!token) {
    return {
      user: null,
      data: null,
      error: "There is no supabase token in request cookies",
    };
  }
  let authRequestResult = await fetch(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/auth/v1/user`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        APIKey: process.env.NEXT_PUBLIC_SUPABASE_PUBLIC_KEY || "",
      },
    },
  );

  let result = await authRequestResult.json();
  if (authRequestResult.status != 200) {
    return {
      user: null,
      data: null,
      error: `Supabase auth returned ${authRequestResult.status}. See logs for details`,
    };
  } else if (result.aud === "authenticated") {
    return {
      user: result,
      data: result,
      error: null,
    };
  }
}
