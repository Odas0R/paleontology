import FossilForm, { FossilFormData } from "components/FossilForm";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";

import Fossil from "../components/Fossil";
import Navbar from "../components/Navbar";
import Tag, { TagColor } from "../components/Tag";
import { Fossils } from "../types";

const fossils2: Fossils = [
  {
    tag: {
      text: "Index",
      color: "yellow",
    },
    event: undefined,
    name: "Encrinurus",
    lifetime: 55.2,
    period: "cambrian",
    imgSrc:
      "https://images.unsplash.com/photo-1613059312885-8a758073461b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    links: [
      {
        type: "ref",
        src: "https://en.wikipedia.org/wiki/Encrinurus",
      },
    ],
  },
  {
    tag: {
      text: "Index",
      color: "yellow",
    },
    event: undefined,
    period: "cambrian",
    name: "Encrinurus",
    lifetime: 55.2,
    imgSrc:
      "https://images.unsplash.com/photo-1613059312885-8a758073461b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    links: [
      {
        type: "ref",
        src: "https://en.wikipedia.org/wiki/Encrinurus",
      },
    ],
  },
];

const fossilsData: Fossils = [
  {
    tag: {
      text: "Index",
      color: "yellow",
    },
    event: {
      title: "Visita ao Museu da Covilhã",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porta consequat feugiat. Ut id velit scelerisque mi mattis interdum. Vivamus commodo finibus metus et viverra. Proin a tincidunt turpis. Cras sit amet urna venenatis, vehicula eros eget, porta augue. Aenean lacinia dapibus quam congue lobortis. Cras at feugiat nisl.\n\nNunc cursus vitae magna tincidunt accumsan. Praesent feugiat odio et aliquam maximus. In ante enim, consectetur sit amet nisi at, congue gravida enim. Aliquam interdum lorem sem, eu semper est rhoncus a. Aenean ultrices, metus at consequat lacinia, purus lectus tempus nibh, a dapibus quam augue at velit. Nulla nec nisl nec tortor aliquam maximus eu ultricies neque. Etiam elementum nulla ac libero convallis, et tincidunt nulla ullamcorper. Nam ex lorem, bibendum quis mauris sit amet, sodales sodales tellus. Nunc sed tellus fermentum, rhoncus nunc ut.",
      date: "01-2022",
      name: "Gonçalo Prates",
      fossils: fossils2,
    },
    name: "Encrinurus",
    lifetime: 55.2,
    period: "cambrian",
    imgSrc:
      "https://images.unsplash.com/photo-1613059312885-8a758073461b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    links: [
      {
        type: "ref",
        src: "https://en.wikipedia.org/wiki/Encrinurus",
      },
    ],
  },
  {
    tag: {
      text: "Resin",
      color: "gray",
    },
    event: {
      title: "Visita ao Museu da Covilhã",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porta consequat feugiat. Ut id velit scelerisque mi mattis interdum. Vivamus commodo finibus metus et viverra. Proin a tincidunt turpis. Cras sit amet urna venenatis, vehicula eros eget, porta augue. Aenean lacinia dapibus quam congue lobortis. Cras at feugiat nisl.\n\nNunc cursus vitae magna tincidunt accumsan. Praesent feugiat odio et aliquam maximus. In ante enim, consectetur sit amet nisi at, congue gravida enim. Aliquam interdum lorem sem, eu semper est rhoncus a. Aenean ultrices, metus at consequat lacinia, purus lectus tempus nibh, a dapibus quam augue at velit. Nulla nec nisl nec tortor aliquam maximus eu ultricies neque. Etiam elementum nulla ac libero convallis, et tincidunt nulla ullamcorper. Nam ex lorem, bibendum quis mauris sit amet, sodales sodales tellus. Nunc sed tellus fermentum, rhoncus nunc ut.",
      date: "01-2022",
      name: "Gonçalo Prates",
      fossils: [],
    },
    name: "Encrinurus",
    lifetime: 55.2,
    period: "cambrian",
    imgSrc:
      "https://images.unsplash.com/photo-1613059312885-8a758073461b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    links: [
      {
        type: "ref",
        src: "https://en.wikipedia.org/wiki/Encrinurus",
      },
    ],
  },
  {
    tag: {
      text: "Index",
      color: "indigo",
    },
    event: {
      title: "Visita ao Museu da Covilhã",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porta consequat feugiat. Ut id velit scelerisque mi mattis interdum. Vivamus commodo finibus metus et viverra. Proin a tincidunt turpis. Cras sit amet urna venenatis, vehicula eros eget, porta augue. Aenean lacinia dapibus quam congue lobortis. Cras at feugiat nisl.\n\nNunc cursus vitae magna tincidunt accumsan. Praesent feugiat odio et aliquam maximus. In ante enim, consectetur sit amet nisi at, congue gravida enim. Aliquam interdum lorem sem, eu semper est rhoncus a. Aenean ultrices, metus at consequat lacinia, purus lectus tempus nibh, a dapibus quam augue at velit. Nulla nec nisl nec tortor aliquam maximus eu ultricies neque. Etiam elementum nulla ac libero convallis, et tincidunt nulla ullamcorper. Nam ex lorem, bibendum quis mauris sit amet, sodales sodales tellus. Nunc sed tellus fermentum, rhoncus nunc ut.",
      date: "01-2022",
      name: "Gonçalo Prates",
      fossils: [],
    },
    name: "Encrinurus",
    lifetime: 55.2,
    period: "cambrian",
    imgSrc:
      "https://images.unsplash.com/photo-1613059312885-8a758073461b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    links: [
      {
        type: "ref",
        src: "https://en.wikipedia.org/wiki/Encrinurus",
      },
    ],
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
  const [fossils, setFossils] = useState(fossilsData);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  const selectTag = (tag: string) =>
    tag === selectedTag ? setSelectedTag("") : setSelectedTag(tag);

  const filterByTag = (tag: string) =>
    tag === ""
      ? setFossils(fossilsData)
      : setFossils(fossilsData.filter(fossil => fossil.tag.text === tag));

  useEffect(() => filterByTag(selectedTag), [selectedTag]);

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
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-10 pb-8">
            <div className="flex -space-x-[5.2rem]">
              <div className="relative z-50 inline object-cover border-2 border-white">
                <Image
                  className="rounded-lg"
                  src="https://images.unsplash.com/photo-1613059312885-8a758073461b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                  width="150%"
                  height="150%"
                  alt="Profile image"
                />
              </div>
              <div className="relative z-40 inline object-cover border-2 border-white">
                <Image
                  className="rounded-lg"
                  src="https://images.unsplash.com/photo-1613059312885-8a758073461b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                  width="150%"
                  height="150%"
                  alt="Profile image"
                />
              </div>
              <div className="relative z-30 inline object-cover border-2 border-white">
                <Image
                  className="rounded-lg"
                  src="https://images.unsplash.com/photo-1613059312885-8a758073461b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                  width="150%"
                  height="150%"
                  alt="Profile image"
                />
              </div>
              <div className="relative z-20 inline object-cover border-2 border-white">
                <Image
                  className="rounded-lg"
                  src="https://images.unsplash.com/photo-1613059312885-8a758073461b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                  width="150%"
                  height="150%"
                  alt="Profile image"
                />
              </div>
              <div className="relative z-10 inline object-cover border-2 border-white">
                <Image
                  className="rounded-lg"
                  src="https://images.unsplash.com/photo-1613059312885-8a758073461b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                  width="150%"
                  height="150%"
                  alt="Profile image"
                />
              </div>
            </div>
            <div className="flex -space-x-[5.2rem]">
              <div className="relative z-50 inline object-cover border-2 border-white">
                <Image
                  className="rounded-lg"
                  src="https://images.unsplash.com/photo-1613059312885-8a758073461b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                  width="200%"
                  height="200%"
                  alt="Profile image"
                />
              </div>
              <div className="relative z-40 inline object-cover border-2 border-white">
                <Image
                  className="rounded-lg"
                  src="https://images.unsplash.com/photo-1613059312885-8a758073461b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                  width="200%"
                  height="200%"
                  alt="Profile image"
                />
              </div>
              <div className="relative z-30 inline object-cover border-2 border-white">
                <Image
                  className="rounded-lg"
                  src="https://images.unsplash.com/photo-1613059312885-8a758073461b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                  width="200%"
                  height="200%"
                  alt="Profile image"
                />
              </div>
              <div className="relative z-20 inline object-cover border-2 border-white">
                <Image
                  className="rounded-lg"
                  src="https://images.unsplash.com/photo-1613059312885-8a758073461b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                  width="200%"
                  height="200%"
                  alt="Profile image"
                />
              </div>
              <div className="relative z-10 inline object-cover border-2 border-white">
                <Image
                  className="rounded-lg"
                  src="https://images.unsplash.com/photo-1613059312885-8a758073461b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                  width="200%"
                  height="200%"
                  alt="Profile image"
                />
              </div>
            </div>
          </div>
        </section>
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
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-10 pb-8">
          {fossils.map((fossil, index) => (
            <Fossil key={index} fossil={fossil} />
          ))}
        </section>
        <section className="p-8 bg-gray-400 mb-10">
          <FossilForm open={open} onClose={onClose} onSubmit={onSubmit}>
            <button
              onClick={handleOpen}
              className="p-3 rounded bg-green-400 border border-green-500 hover:scale-105 transition-transform "
            >
              Click Me
            </button>
          </FossilForm>
        </section>
      </main>
    </Fragment>
  );
};

export default Home;
