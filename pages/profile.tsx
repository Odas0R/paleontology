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
        <div className="container mx-auto px-4 sm:px-6">
          <div className="my-10">
            <div className="flex h-20 w-20 text-2xl text-center justify-center items-center rounded-full ring-2 ring-blue-500 bg-blue-500 text-white mx-auto">
              <span>GP</span>
            </div>
            <div className="text-center justify-center items-center text-gray-500 mt-4">
              <span className="text-xl">Gonçalo Prates</span>
            </div>
          </div>
          <div className="text-left mx-auto mt-14">
            <h1 className="text-gray-900 text-4xl tracking-tight font-bold sm:text-5xl">
              Events
            </h1>
          </div>
          {/* Display all fossils */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-24 pb-8">
            {fossils.map((fossil, index) => (
              <Fossil key={index} fossil={fossil} />
            ))}
          </section>
          <div className="text-left mx-auto mt-14">
            <h1 className="text-gray-900 text-4xl tracking-tight font-bold sm:text-5xl">
              Fossils
            </h1>
          </div>
          {/* Display all fossils */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-24 pb-8">
            {fossils.map((fossil, index) => (
              <Fossil key={index} fossil={fossil} />
            ))}
          </section>
        </div>
      </main>
    </Fragment>
  );
};

export default Home;
