import type { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";
import Navbar from "../components/Navbar";

// type FossilLink = "geo" | "ref" | "musem" | "";

const fossils = [
  {
    type: "True Form",
    name: "Encrinurus",
    location: "Museum",
    foundBy: "John Doe",
    imgSrc:
      "https://images.unsplash.com/photo-1613059312885-8a758073461b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    links: [
      {
        type: "geo",
      },
    ],
  },
  {
    type: "True Form",
    name: "Busmatus",
    location: "Museum",
    foundBy: "John Doe",
    imgSrc:
      "https://images.unsplash.com/photo-1613059312885-8a758073461b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    type: "True Form",
    name: "Busmatus",
    location: "Museum",
    foundBy: "John Doe",
    imgSrc:
      "https://images.unsplash.com/photo-1613059312885-8a758073461b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    type: "True Form",
    name: "Busmatus",
    location: "Museum",
    foundBy: "John Doe",
    imgSrc:
      "https://images.unsplash.com/photo-1613059312885-8a758073461b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    type: "True Form",
    name: "Fragiscutum",
    location: "Museum",
    foundBy: "John Doe",
    imgSrc:
      "https://images.unsplash.com/photo-1613059312885-8a758073461b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    type: "True Form",
    name: "Dalmanites",
    location: "Museum",
    foundBy: "John Doe",
    imgSrc:
      "https://images.unsplash.com/photo-1613059312885-8a758073461b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
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
            <p className="mt-4 max-w-3xl space-y-6">
              Paleontology is the study of the history of life on Earth as based
              on fossils. Fossils are the remains of plants, animals, fungi,
              bacteria, and single-celled living things that have been replaced
              by rock material or impressions of organisms preserved in rock.
            </p>
          </div>
        </div>
        {/* Display all fossils */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-24">
          {fossils.map((fossil, index) => (
            <div
              key={index}
              className="group relative aspect-w-1 aspect-h-1 hover:scale-[1.02] transition-all"
            >
              <img
                className="w-full object-cover rounded-lg"
                src={fossil.imgSrc}
                alt=""
              />
              {/* overlay */}
              <div className="absolute h-full ring-1 ring-inset ring-black/10 rounded-lg group-hover:bg-black group-hover:opacity-50"></div>

              <div className="absolute inset-0 hidden group-hover:flex h-full p-5 flex-col justify-between">
                {/* top information */}
                <div className="flex justify-between">
                  <div className="h-10 w-10 flex justify-center items-center rounded-full ring-2 ring-gray-400 bg-gray-400 opacity-95 text-white">
                    <span className="">GR</span>
                  </div>
                </div>
                {/* bottom information */}
                <div className="">
                  <div className="text-2xl xl:text-xl font-medium text-gray-100">
                    {fossil.name}
                  </div>
                  <div className="flex mx-auto justify-center items-center pt-6 pb-1">
                    <div className="h-10 w-10 flex justify-center items-center rounded-full ring-2 ring-gray-200 bg-gray-200 opacity-95 text-black mr-3">
                      <span className="">GR</span>
                    </div>
                    <div className="h-10 w-10 flex justify-center items-center rounded-full ring-2 ring-gray-200 bg-gray-200 opacity-95 text-black mr-3">
                      <span className="">GR</span>
                    </div>
                    <div className="h-10 w-10 flex justify-center items-center rounded-full ring-2 ring-gray-200 bg-gray-200 opacity-95 text-black">
                      <span className="">GR</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </Fragment>
  );
};

export default Home;
