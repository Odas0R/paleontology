import Image from "next/image";

import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function Navbar() {
  return (
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Paleontology</span>
              <Image
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark.svg"
                alt="Paleontology logo svg image"
              />
            </a>
          </div>
          <div className="flex items-center justify-end md:flex-1 lg:w-0">
            <SignIn />
            <SignUp />
          </div>
        </div>
      </div>
    </div>
  );
}
