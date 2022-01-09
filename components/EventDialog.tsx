import { Dialog, Transition } from "@headlessui/react";
import { Fragment, ReactNode } from "react";
import { Event } from "types";

import Fossil from "./Fossil";

type EventDialogProps = {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
  event: Event;
};

function getInitialsFromName(name: string) {
  let nameTokens = name.split(" ");
  return nameTokens[0].charAt(0) + nameTokens[nameTokens.length - 1].charAt(0);
}

export default function EventDialog({
  children,
  open,
  onClose,
  event,
}: EventDialogProps) {
  return (
    <Fragment>
      {children}
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          onClose={onClose}
        >
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 mx-auto w-full max-w-4xl">
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
              <div className="inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 align-middle">
                <div className="bg-white px-8 pt-10 pb-8 sm:px-8 sm:py-12 sm:pb-8">
                  <div className="flex justify-center">
                    <div>
                      <Dialog.Title
                        as="h1"
                        className="text-center text-gray-900 text-3xl tracking-tight font-bold sm:text-4xl mb-6 max-w-3xl mx-auto"
                      >
                        {event.title}
                      </Dialog.Title>
                      <div className="mt-6 mx-auto">
                        <div className="my-10">
                          <div className="flex h-10 w-10 text-center justify-center items-center rounded-full ring-2 ring-blue-500 bg-blue-500 text-white mx-auto">
                            <span>{getInitialsFromName(event.title)}</span>
                          </div>
                          <div className="text-center justify-center items-center text-gray-500 mt-4 space-x-6">
                            <span className="text-sm">John Doe</span>
                          </div>
                        </div>
                        <p className="text-center mt-3 max-w-xl space-y-6 whitespace-pre-wrap mx-auto">
                          {event.description}
                        </p>
                        {/* Display all fossils */}
                        <div className="pt-24">
                          <h4 className="text-2xl sm:text-3xl text-gray-900 font-semibold mb-8">
                            Fossils
                          </h4>
                          <section className="justify-center grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                            {event.fossils.map((fossil, index) => (
                              <Fossil key={index} fossil={fossil} />
                            ))}
                          </section>
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
