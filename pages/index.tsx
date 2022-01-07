import type { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";

import Fossil from "../components/Fossil";
import Navbar from "../components/Navbar";
import { Fossils } from "../types";

const fossils: Fossils = [
  {
    tag: {
      text: "True Form",
      color: "yellow",
    },
    name: "Encrinurus",
    lifetime: 55.2,
    period: "Jurassic",
    event: undefined,
    imgSrc:
      "https://images.unsplash.com/photo-1613059312885-8a758073461b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    links: [
      {
        type: "ref",
        src: "https://en.wikipedia.org/wiki/Encrinurus",
      },
      {
        type: "museum",
        src: "https://en.wikipedia.org/wiki/Encrinurus",
      },
      {
        type: "geo",
        src: "https://en.wikipedia.org/wiki/Encrinurus",
      },
    ],
  },
  {
    tag: {
      text: "True Form",
      color: "gray",
    },
    name: "Encrinurus",
    period: "Jurassic",
    event: undefined,
    lifetime: 55.2,
    imgSrc:
      "https://images.unsplash.com/photo-1613059312885-8a758073461b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    links: [
      {
        type: "ref",
        src: "https://en.wikipedia.org/wiki/Encrinurus",
      },
      {
        type: "museum",
        src: "https://en.wikipedia.org/wiki/Encrinurus",
      },
      {
        type: "geo",
        src: "https://en.wikipedia.org/wiki/Encrinurus",
      },
    ],
  },
  {
    tag: {
      text: "True Form",
      color: "indigo",
    },
    name: "Encrinurus",
    period: "Jurassic",
    event: undefined,
    lifetime: 55.2,
    imgSrc:
      "https://images.unsplash.com/photo-1613059312885-8a758073461b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    links: [
      {
        type: "ref",
        src: "https://en.wikipedia.org/wiki/Encrinurus",
      },
      {
        type: "museum",
        src: "https://en.wikipedia.org/wiki/Encrinurus",
      },
      {
        type: "geo",
        src: "https://en.wikipedia.org/wiki/Encrinurus",
      },
    ],
  },
];

const Home: NextPage = () => {
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
            <h1 className="text-gray-900 text-4xl tracking-tight font-extrabold sm:text-5xl">
              Discovering Paleontology
            </h1>
            <p className="mt-8 max-w-3xl space-y-6">
              Paleontology is the study of the history of life on Earth as based
              on fossils. Fossils are the remains of plants, animals, fungi,
              bacteria, and single-celled living things that have been replaced
              by rock material or impressions of organisms preserved in rock.
            </p>
          </div>
        </div>
        {/* Display all fossils */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-24 pb-8">
          {fossils.map((fossil, index) => (
            <Fossil key={index} fossil={fossil} />
          ))}
        </section>
      </main>
    </Fragment>
  );
};

export default Home;
