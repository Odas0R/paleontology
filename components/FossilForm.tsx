import { Dialog, Transition } from "@headlessui/react";
import { Fragment, ReactNode } from "react";
import { useForm, useWatch } from "react-hook-form";
import { FossilEntity, FossilPeriod } from "types";

type FossilFormProps = {
  children: ReactNode;
  open: boolean;
  initialValue?: FossilEntity;
  onSubmit: (data: FossilFormData) => void;
  handleRemove?: () => void;
  onClose: () => void;
};

export type FossilFormData = {
  name: string;
  tag: string;
  reference_url: string;
  period: FossilPeriod;
  lifetime: number;
  image: FileList;
};

export default function FossilForm({
  children,
  open,
  initialValue,
  onSubmit,
  onClose,
  handleRemove,
}: FossilFormProps) {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FossilFormData>({
    defaultValues: initialValue && {
      name: initialValue.name,
      tag: initialValue.tag.value,
      reference_url: initialValue.reference_url,
      period: initialValue.period,
      lifetime: initialValue.lifetime,
    },
  });

  const image = useWatch({
    control,
    name: "image",
  });

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
              <div className="inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 align-middle max-w-lg w-full">
                <div className="bg-white px-8 pt-10 pb-8 sm:px-8 sm:py-12 sm:pb-8">
                  <div>
                    <Dialog.Title
                      as="h1"
                      className="text-center text-gray-900 text-3xl tracking-tight font-bold sm:text-4xl mb-6"
                    >
                      {initialValue ? "Edit Fossil" : "Add Fossil"}
                    </Dialog.Title>
                    <form onSubmit={e => e.preventDefault()}>
                      <div className="overflow-hidden sm:rounded-md">
                        <div className="p-2">
                          <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                              <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Species Name
                              </label>
                              <input
                                type="text"
                                id="name"
                                className="mt-1 focus:ring-emerald-500 focus:border-emerald-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                {...register("name", { required: true })}
                              />
                              {errors.name?.type === "required" && (
                                <p className="text-red-500 text-sm mt-3">
                                  A name is required.
                                </p>
                              )}
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                              <label
                                htmlFor="lifetime"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Fossil Age (in Million years)
                              </label>
                              <input
                                type="number"
                                id="lifetime"
                                className="mt-1 focus:ring-emerald-500 focus:border-emerald-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                {...register("lifetime", {
                                  required: true,
                                  valueAsNumber: true,
                                })}
                              />
                              {errors.lifetime?.type === "required" && (
                                <p className="text-red-500 text-sm mt-3">
                                  A age is required.
                                </p>
                              )}
                              {errors.lifetime?.type === "valueAsNumber" && (
                                <p className="text-red-500 text-sm mt-3">
                                  The age must be a number.
                                </p>
                              )}
                            </div>

                            <div className="col-span-6">
                              <label
                                htmlFor="wikipediaReference"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Wikipedia Reference (URL)
                              </label>
                              <input
                                type="url"
                                id="reference_url"
                                className="mt-1 focus:ring-emerald-500 focus:border-emerald-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                {...register("reference_url", {
                                  required: true,
                                })}
                              />
                              {errors.reference_url?.type === "required" && (
                                <p className="text-red-500 text-sm mt-3">
                                  A reference is required.
                                </p>
                              )}
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
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                                {...register("tag", { required: true })}
                              >
                                <option value={undefined} hidden></option>
                                <option value="index">Index</option>
                                <option value="trace">Trace</option>
                                <option value="transitional">
                                  Transitional
                                </option>
                                <option value="microfossil">Microfossil</option>
                                <option value="resin">Resin</option>
                                <option value="derived">Derived</option>
                                <option value="wood">Wood</option>
                                <option value="true Form">True Form</option>
                              </select>
                              {errors.tag?.type === "required" && (
                                <p className="text-red-500 text-sm mt-3">
                                  A type is required.
                                </p>
                              )}
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
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                                {...register("period", { required: true })}
                              >
                                <option value={undefined} hidden></option>
                                <option value="paleogene">Paleogene</option>
                                <option value="cretaceous">Cretaceous</option>
                                <option value="jurassic">Jurassic</option>
                                <option value="triassic">Triassic</option>
                                <option value="permian">Permian</option>
                                <option value="carboniferous">
                                  Carboniferous
                                </option>
                                <option value="devonian">Devonian</option>
                                <option value="silurian">Silurian</option>
                                <option value="ordovician">Ordovician</option>
                                <option value="cambrian">Cambrian</option>
                              </select>
                              {errors.period?.type === "required" && (
                                <p className="text-red-500 text-sm mt-3">
                                  A period is required.
                                </p>
                              )}
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
                                        htmlFor="image"
                                        className="mx-auto relative cursor-pointer bg-white rounded-md font-medium text-emerald-600 hover:text-emerald-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-emerald-500"
                                      >
                                        <span>Upload a file</span>
                                        <input
                                          id="image"
                                          type="file"
                                          accept=".jpg,.jpeg,.png"
                                          className="sr-only"
                                          {...register("image", {
                                            required:
                                              initialValue === undefined,
                                          })}
                                        />
                                      </label>
                                    </div>
                                    <p className="text-xs text-gray-500">
                                      PNG, JPG, JPEG
                                    </p>
                                    {image !== undefined &&
                                      image.length > 0 && (
                                        <p className="text-xs text-gray-500">
                                          File Uploaded: {image[0].name}
                                        </p>
                                      )}
                                  </div>
                                </div>
                              </div>
                              {errors.image?.type === "required" && (
                                <p className="text-red-500 text-sm mt-3">
                                  An image is required.
                                </p>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="px-4 py-3 text-right sm:px-6">
                          {initialValue && (
                            <button
                              onClick={handleRemove}
                              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 mr-3"
                            >
                              Delete
                            </button>
                          )}
                          <button
                            onClick={handleSubmit(onSubmit)}
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </form>
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
