import Image from "next/image";
import Link from "next/link";
import { useAuth } from "providers";

import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function Navbar() {
  const { user, signOut } = useAuth();

  return (
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <a>
                <span className="sr-only">Paleontology</span>
                <Image
                  className="h-8 w-auto sm:h-10"
                  width="42px"
                  height="42px"
                  src="https://tailwindui.com/img/logos/workflow-mark.svg"
                  alt="Paleontology logo svg image"
                />
              </a>
            </Link>
          </div>
          <div className="flex justify-center lg:w-0 lg:flex-1">
            <Link href="/index">
              <a className=" mr-8 whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer">
                Discover
              </a>
            </Link>

            <Link href="/events">
              <a className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer">
                Events
              </a>
            </Link>
          </div>
          <div className="flex items-center justify-end md:flex-1 lg:w-0">
            {user ? (
              <>
                <a
                  className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer"
                  onClick={signOut}
                >
                  Logout
                </a>
                <Link href="/dashboard">
                  <a className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700">
                    Dashboard
                  </a>
                </Link>
              </>
            ) : (
              <>
                <SignIn />
                <SignUp />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
