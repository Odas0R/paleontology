import { PlusCircleIcon } from "@heroicons/react/outline";
import EventForm, { EventFormData } from "components/EventForm";
import Fossil from "components/Fossil";
import FossilForm, { FossilFormData } from "components/FossilForm";
import Navbar from "components/Navbar";
import { useDisclosure } from "hooks";
import type { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";
import { Fossils } from "types";

const fossils: Fossils = [
  {
    tag: {
      text: "True Form",
      color: "yellow",
    },
    name: "Encrinurus",
    lifetime: 55.2,
    period: "jurassic",
    event: undefined,
    imgSrc:
      "https://images.unsplash.com/photo-1613059312885-8a758073461b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    referenceUrl: "https://en.wikipedia.org/wiki/Encrinurus",
  },
  {
    tag: {
      text: "True Form",
      color: "gray",
    },
    name: "Encrinurus",
    period: "jurassic",
    event: undefined,
    lifetime: 55.2,
    imgSrc:
      "https://images.unsplash.com/photo-1613059312885-8a758073461b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    referenceUrl: "https://en.wikipedia.org/wiki/Encrinurus",
  },
  {
    tag: {
      text: "True Form",
      color: "indigo",
    },
    name: "Encrinurus",
    period: "jurassic",
    event: undefined,
    lifetime: 55.2,
    imgSrc:
      "https://images.unsplash.com/photo-1613059312885-8a758073461b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    referenceUrl: "https://en.wikipedia.org/wiki/Encrinurus",
  },
];

const Home: NextPage = () => {
  const { open, handleOpen, onClose } = useDisclosure();
  const {
    open: openEvent,
    handleOpen: handleOpenEvent,
    onClose: onCloseEvent,
  } = useDisclosure();

  const onSubmit = (data: FossilFormData) => console.log(data);

  return (
    <Fragment>
      <Head>
        <title>Paleontology</title>
        <meta name="description" content="Paleontology project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Discovering Paleontology text */}
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mt-14">
            <h1 className="text-gray-900 text-4xl tracking-tight font-bold sm:text-5xl">
              Your Workspace
            </h1>
            <p className="mt-8 max-w-3xl space-y-6">
              Paleontology is the study of the history of life on Earth as based
              on fossils. Fossils are the remains of plants, animals, fungi,
              bacteria, and single-celled living things that have been replaced
              by rock material or impressions of organisms preserved in rock.
            </p>
          </div>
        </div>

        {/* Display Favourite Fossils */}
        <section className="pt-24 pb-8">
          <h4 className="text-2xl sm:text-3xl text-gray-900 font-semibold mb-12">
            Favourites
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {fossils.map((fossil, index) => (
              <Fossil favourite key={index} fossil={fossil} />
            ))}
          </div>
        </section>

        {/* Display Favourite Fossils */}
        <section className="pt-24 pb-8">
          <div className="flex justify-between items-center mb-12">
            <h4 className="text-2xl sm:text-3xl text-gray-900 font-semibold">
              Events
            </h4>
            <EventForm
              open={openEvent}
              onClose={onCloseEvent}
              onSubmit={(data: EventFormData) => console.log(data)}
            >
              <button
                onClick={handleOpenEvent}
                className="inline-flex justify-center items-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
              >
                <span className="mr-1">
                  <PlusCircleIcon width="18px" height="18px" />
                </span>{" "}
                Add Event
              </button>
            </EventForm>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {fossils.map((fossil, index) => (
              <Fossil favourite key={index} fossil={fossil} />
            ))}
          </div>
        </section>

        {/* Display all fossils */}
        <section className="pt-24 pb-8">
          <div className="flex justify-between items-center mb-12">
            <h4 className="text-2xl sm:text-3xl text-gray-900 font-semibold">
              Fossils
            </h4>
            <FossilForm open={open} onClose={onClose} onSubmit={onSubmit}>
              <button
                onClick={handleOpen}
                className="inline-flex justify-center items-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
              >
                <span className="mr-1">
                  <PlusCircleIcon width="18px" height="18px" />
                </span>{" "}
                Add Fossil
              </button>
            </FossilForm>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
            {fossils.map((fossil, index) => (
              <Fossil editable key={index} fossil={fossil} />
            ))}
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default Home;
