import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { useAuth } from "providers";
import { Fragment, ReactNode, useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { FossilService } from "services";
import { EventEntity, Fossils } from "types";

import CheckboxFossil from "./CheckboxFossil";

// const fossils: Fossils = [
//   {
//     tag: {
//       text: "True Form",
//       color: "yellow",
//     },
//     name: "Encrinurus",
//     lifetime: 55.2,
//     period: "Jurassic",
//     event: undefined,
//     imgSrc:
//       "https://images.unsplash.com/photo-1613059312885-8a758073461b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
//     referenceUrl: "https://en.wikipedia.org/wiki/Encrinurus",
//   },
//   {
//     tag: {
//       text: "True Form",
//       color: "gray",
//     },
//     name: "Encrinurus",
//     period: "Jurassic",
//     event: undefined,
//     lifetime: 55.2,
//     imgSrc:
//       "https://images.unsplash.com/photo-1613059312885-8a758073461b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
//     referenceUrl: "https://en.wikipedia.org/wiki/Encrinurus",
//   },
//   {
//     tag: {
//       text: "True Form",
//       color: "indigo",
//     },
//     name: "Encrinurus",
//     period: "Jurassic",
//     event: undefined,
//     lifetime: 55.2,
//     imgSrc:
//       "https://images.unsplash.com/photo-1613059312885-8a758073461b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
//     referenceUrl: "https://en.wikipedia.org/wiki/Encrinurus",
//   },
// ];

type EventFormProps = {
  children: ReactNode;
  open: boolean;
  initialValue?: EventEntity;
  onSubmit: (data: EventFormData) => void;
  onClose: () => void;
};

export type EventFormData = {
  title: string;
  description: string;
  fossils: string[];
};

export default function EventForm({
  children,
  open,
  initialValue,
  onSubmit,
  onClose,
}: EventFormProps) {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EventFormData>();

  const { user } = useAuth();
  const [fossils, setFossils] = useState<Fossils>([]);

  useEffect(() => {
    const getData = async () => {
      if (user) {
        const fossils = await FossilService.getAllByAuthor(user.id);

        setFossils(fossils);
      }
    };

    getData();
  }, [user]);

  const { fields, append } = useFieldArray({
    name: "fossils" as never,
    control,
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
                      {initialValue ? "Edit Event" : "Add Event"}
                    </Dialog.Title>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="overflow-hidden sm:rounded-md">
                        <div className="p-2">
                          <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6">
                              <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Title
                              </label>
                              <input
                                type="text"
                                id="title"
                                className="mt-1 focus:ring-emerald-500 focus:border-emerald-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                defaultValue={initialValue?.title}
                                {...register("title", { required: true })}
                              />
                              {errors.title?.type === "required" && (
                                <p className="text-red-500 text-sm mt-3">
                                  A title is required.
                                </p>
                              )}
                            </div>

                            <div className="col-span-6">
                              <label
                                htmlFor="description"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Description
                              </label>
                              <textarea
                                id="description"
                                className="mt-1 focus:ring-emerald-500 focus:border-emerald-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                defaultValue={initialValue?.description}
                                {...register("description", { required: true })}
                              />
                              {errors.description?.type === "required" && (
                                <p className="text-red-500 text-sm mt-3">
                                  A description is required.
                                </p>
                              )}
                            </div>

                            <div className="col-span-6">
                              <ul>
                                {fields.map((field, index) => (
                                  <li key={field.id}>
                                    <CheckboxFossil
                                      key={index}
                                      {...register(`fossils.${index}`)}
                                    />
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <span className="mb-2">
                        Click on the fossils you want to select
                      </span>
                      <div className="justify-center grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-3 gap-4">
                        {fossils.map((fossil, index) => (
                          <div key={index} onClick={() => append(fossil)}>
                            <div className="group relative aspect-w-1 aspect-h-1 hover:scale-[1.02] transition-all hover:z-10 border-[2px]  rounded-lg border-emerald-500/80">
                              <Image
                                className="object-cover rounded-lg"
                                src={fossil.img_src}
                                layout="fill"
                                alt=""
                              />
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="px-4 py-3 text-right sm:px-6">
                        <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 mr-3">
                          Delete
                        </button>
                        <button
                          type="submit"
                          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                        >
                          Save
                        </button>
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
