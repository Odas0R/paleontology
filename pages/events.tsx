import type { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";

import Event from "../components/Event";
import Navbar from "../components/Navbar";
import type { Event as EventEntity, Fossils } from "../types";

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

const events: EventEntity[] = [
  {
    title: "Lorem ipsum dolor sit amet, consetetur sadipscing",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,",
    fossils: fossils,
  },
  {
    title: "Lorem ipsum dolor sit amet, consetetur sadipscing",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,",
    fossils: fossils,
  },
  {
    title: "Lorem ipsum dolor sit amet, consetetur sadipscing",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,",
    fossils: fossils,
  },
  {
    title: "Lorem ipsum dolor sit amet, consetetur sadipscing",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,",
    fossils: fossils,
  },
  {
    title: "Lorem ipsum dolor sit amet, consetetur sadipscing",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,",
    fossils: fossils,
  },
  {
    title: "Lorem ipsum dolor sit amet, consetetur sadipscing",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,",
    fossils: fossils,
  },
];

const Events: NextPage = () => {
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
