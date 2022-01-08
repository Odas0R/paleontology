import { Dialog, Transition } from "@headlessui/react";
import { Fragment, ReactNode } from "react";

type FossilFormProps = {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
};

export default function FossilForm({
  children,
  open,
  onClose,
}: FossilFormProps) {
  return (
    <Fragment>
      {children}
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          onClose={onClose}
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
              <div className="inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 align-middle max-w-4xl">
                <div className="bg-white px-8 pt-10 pb-8 sm:px-8 sm:py-12 sm:pb-8">
                  <div className="flex justify-center">
                    <div>
                      <Dialog.Title
                        as="h1"
                        className="text-center text-gray-900 text-4xl tracking-tight font-bold sm:text-5xl mb-6"
                      >
                        Add a Fossil
                      </Dialog.Title>
                      <form action="#" method="POST">
                        <div className="overflow-hidden sm:rounded-md">
                          <div className="px-4 py-5 sm:p-6">
                            <div className="grid grid-cols-6 gap-6">
                              <div className="col-span-6 sm:col-span-3">
                                <label
                                  htmlFor="species-name"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Species Name
                                </label>
                                <input
                                  type="text"
                                  name="species-name"
                                  id="species-name"
                                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                              </div>

                              <div className="col-span-6 sm:col-span-3">
                                <label
                                  htmlFor="fossil-age"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Fossil Age (in Million years)
                                </label>
                                <input
                                  type="text"
                                  name="fossil-age"
                                  id="fossil-age"
                                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                              </div>

                              <div className="col-span-6 sm:col-span-4">
                                <label
                                  htmlFor="wiki-ref"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Wikipedia Reference (URL)
                                </label>
                                <input
                                  type="text"
                                  name="wiki-ref"
                                  id="wiki-ref"
                                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                              </div>

                              <div className="col-span-6 sm:col-span-3">
                                <label
                                  htmlFor="type"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Fossil Type
                                </label>
                                <select
                                  id="type"
                                  name="type"
                                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                  <option disabled selected hidden>
                                    Select One
                                  </option>
                                  <option>Index</option>
                                  <option>Trace</option>
                                  <option>Transitional</option>
                                  <option>Microfossil</option>
                                  <option>Resin</option>
                                  <option>Derived</option>
                                  <option>Wood</option>
                                </select>
                              </div>
                              <div className="col-span-6 sm:col-span-3">
                                <label
                                  htmlFor="period"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Time Period
                                </label>
                                <select
                                  id="period"
                                  name="period"
                                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                  <option disabled selected hidden>
                                    Select One
                                  </option>
                                  <option>Paleogene</option>
                                  <option>Cretaceous</option>
                                  <option>Jurassic</option>
                                  <option>Triassic</option>
                                  <option>Permian</option>
                                  <option>Carboniferous</option>
                                  <option>Devonian</option>
                                  <option>Silurian</option>
                                  <option>Ordovician</option>
                                  <option>Cambrian</option>
                                </select>
                              </div>
                            </div>
                          </div>

                          <div>
                            <div className="mt-5 md:mt-0 md:col-span-2">
                              <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                                <div>
                                  <label className="block text-sm font-medium text-gray-700">
                                    Fossil Picture
                                  </label>
                                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                    <div className="space-y-1 text-center">
                                      <svg
                                        className="mx-auto h-12 w-12 text-gray-400"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 48 48"
                                        aria-hidden="true"
                                      >
                                        <path
                                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                          strokeWidth={2}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                      <div className="flex text-sm text-gray-600">
                                        <label
                                          htmlFor="file-upload"
                                          className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                        >
                                          <span>Upload a file</span>
                                          <input
                                            id="file-upload"
                                            name="file-upload"
                                            type="file"
                                            className="sr-only"
                                          />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                      </div>
                                      <p className="text-xs text-gray-500">
                                        PNG, JPG up to 10MB
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="px-4 py-3 text-right sm:px-6">
                            <button
                              type="submit"
                              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      </form>
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
