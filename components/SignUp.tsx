import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef, useState } from "react";
import { FcGoogle } from "react-icons/fc";

export default function SignUp() {
  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);
  const handleOpen = () => setOpen(true);

  return (
    <Fragment>
      <a
        href="#"
        className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700"
        onClick={handleOpen}
      >
        Sign Up
      </a>

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-40 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 align-middle max-w-md">
                <div className="bg-white px-8 pt-10 pb-8 sm:px-8 sm:py-12 sm:pb-8">
                  <div className="flex justify-center">
                    <div className="text-center sm:text-left">
                      <Dialog.Title
                        as="h2"
                        className="text-center text-3xl font-extrabold text-gray-900"
                      >
                        Create a new account
                      </Dialog.Title>
                      <div className="mt-6 mx-auto">
                        <p className="text-center text-sm text-gray-500 px-4">
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam
                        </p>
                        <button className="mt-9 w-full whitespace-nowrap inline-flex items-center justify-center px-4 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700">
                          <div className="w-[20%]">
                            <FcGoogle size="24" className="justify-start" />{" "}
                          </div>
                          <div className="w-[60%]">Sign Up with Google</div>
                          <div className="w-[20%]"></div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </Fragment>
  );
}
