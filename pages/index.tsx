import Tag, { TagColor } from "components/Tag";
import type { NextPage } from "next";
import Head from "next/head";
import { Fragment, useState } from "react";

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

const tags: { text: string; color: TagColor }[] = [
  { text: "Index", color: "yellow" },
  { text: "Trace", color: "teal" },
  { text: "Transitional", color: "cyan" },
  { text: "Microfossil", color: "green" },
  { text: "Resin", color: "rose" },
  { text: "Derived", color: "orange" },
  { text: "Wood", color: "purple" },
  { text: "Precambrian", color: "slate" },
  { text: "Paleozoic", color: "gray" },
  { text: "Mesozoic", color: "green" },
  { text: "Cenozoic", color: "amber" },
];

const Home: NextPage = () => {
  const [selectedTag, setSelectedTag] = useState<string>("");
  const selectTag = (tag: string) =>
    tag === selectedTag ? setSelectedTag("") : setSelectedTag(tag);

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

        <section className="text-center pt-24 max-w-lg mx-auto">
          {tags.map((tag, index) => (
            <Tag
              className="mx-6 mt-5 cursor-pointer hover:scale-105 transition-transform"
              onClick={() => selectTag(tag.text)}
              key={index}
              color={tag.color}
            >
              {tag.text}
            </Tag>
          ))}
        </section>

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
