import type { NextPage } from "next";
import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import { EventService } from "services/event.service";

import Event from "../components/Event";
import Navbar from "../components/Navbar";
import type { EventEntity as EventEntity } from "../types";

const Events: NextPage = () => {
  const [events, setEvents] = useState<EventEntity[]>([]);

  useEffect(() => {
    const getEvents = async () => {
      const events = await EventService.getAll();
      setEvents(events);
    };

    getEvents();
  }, []);

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
              User Events
            </h1>
            <p className="mt-8 max-w-3xl space-y-6">
              Collections of pictures that users compiled after some event.
            </p>
          </div>
        </div>
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-[4.2rem] gap-y-[2.5rem] pt-20 pb-8 pr-12">
            {events.map((event, index) => (
              <Event key={index} event={event} />
            ))}
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default Events;
