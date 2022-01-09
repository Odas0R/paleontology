import { Dialog, Transition } from "@headlessui/react";
import { useAuth } from "providers";
import { Fragment, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";

type SignUpFormData = {
  name: string;
  email: string;
  password: string;
};

export default function SignUp() {
  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);
  const handleOpen = () => setOpen(true);

  const { signInWithGoogle, signUp } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>();

  const onSubmit = (data: SignUpFormData) => signUp(data);

  return (
    <Fragment>
      <button
        className="ml-6 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700"
        onClick={handleOpen}
      >
        Sign Up
      </button>

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
                    <div className="text-left">
                      <Dialog.Title
                        as="h2"
                        className="text-center text-3xl font-bold text-gray-900"
                      >
                        Create a new account
                      </Dialog.Title>
                      <div className="mt-6 mx-auto">
                        <p className="text-center text-sm text-gray-500 px-4 pb-6 pt-2">
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam
                        </p>

                        <form onSubmit={handleSubmit(onSubmit)}>
                          <div className="overflow-hidden p-2">
                            <div className="grid grid-cols-6 gap-6">
                              <div className="col-span-6">
                                <label
                                  htmlFor="first-name"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Full Name
                                </label>
                                <input
                                  type="text"
                                  id="name"
                                  autoComplete="given-name"
                                  className="mt-1 focus:ring-emerald-500 focus:border-emerald-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                  {...register("name", { required: true })}
                                />
                                {errors.name && (
                                  <p className="text-red-500 text-sm mt-3">
                                    A name is required.
                                  </p>
                                )}
                              </div>

                              <div className="col-span-6">
                                <label
                                  htmlFor="email-address"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Email address
                                </label>
                                <input
                                  type="email"
                                  id="email"
                                  autoComplete="email"
                                  className="mt-1 focus:ring-emerald-500 focus:border-emerald-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                  {...register("email", { required: true })}
                                />
                                {errors.email && (
                                  <p className="text-red-500 text-sm mt-3">
                                    A email is required.
                                  </p>
                                )}
                              </div>

                              <div className="col-span-6">
                                <label
                                  htmlFor="password"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Password
                                </label>
                                <input
                                  type="password"
                                  id="password"
                                  className="mt-1 focus:ring-emerald-500 focus:border-emerald-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                  {...register("password", {
                                    required: true,
                                    minLength: 6,
                                  })}
                                />
                                {errors.password?.type === "required" && (
                                  <p className="text-red-500 text-sm mt-3">
                                    A password is required.
                                  </p>
                                )}

                                {errors.password?.type === "minLength" && (
                                  <p className="text-red-500 text-sm mt-3">
                                    A password need to have a minimum of 6
                                    characters.
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="px-2 mt-9">
                            <button className="w-full whitespace-nowrap inline-flex items-center justify-center px-4 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-emerald-500 hover:bg-emerald-600">
                              Create Account
                            </button>
                          </div>
                        </form>

                        <div className="flex items-center my-8 px-2">
                          <div className="w-[40%] h-[1px] bg-gray-400/50" />
                          <div className="w-[20%] text-gray-500 text-center">
                            Or
                          </div>
                          <div className="w-[40%] h-[1px] bg-gray-400/50" />
                        </div>

                        <div className="px-2">
                          <button
                            onClick={signInWithGoogle}
                            className="w-full whitespace-nowrap inline-flex items-center justify-center px-4 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-700 hover:bg-blue-800"
                          >
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
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </Fragment>
  );
}
