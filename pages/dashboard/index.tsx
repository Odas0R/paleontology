import { PlusCircleIcon } from "@heroicons/react/outline";
import Event from "components/Event";
import EventForm, { EventFormData } from "components/EventForm";
import Fossil from "components/Fossil";
import FossilForm, { FossilFormData } from "components/FossilForm";
import Navbar from "components/Navbar";
import { useDisclosure } from "hooks";
import type { NextPage } from "next";
import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import { EventEntity, Fossils } from "types";

const Home: NextPage = () => {
  const [favouriteFossils, setFavouriteFossils] = useState<Fossils>([]);
  const [fossils, setFossils] = useState<Fossils>([]);
  const [events, setEvents] = useState<EventEntity[]>([]);

  useEffect(() => {
    const getData = async () => {
      setFavouriteFossils([]);
      setFossils([]);
      setEvents([]);
    };

    getData();
  }, []);

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
            {favouriteFossils.map((fossil, index) => (
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
            {events.map((event, index) => (
              <Event key={index} event={event} />
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
