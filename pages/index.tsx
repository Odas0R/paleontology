import Fossil from "components/Fossil";
import type { NextPage } from "next";
import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import FossilsService from "services/fossil.service";
import { FossilEntity } from "types";

import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  const [fossils, setFossils] = useState<FossilEntity[]>();
  // const [selectedTag, setSelectedTag] = useState<string>("");
  // const selectTag = (tag: string) =>
  //   tag === selectedTag ? setSelectedTag("") : setSelectedTag(tag);

  useEffect(() => {
    const getFossils = async () => {
      const fossils = await FossilsService.getAll();
      setFossils(fossils);
    };

    getFossils();
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

        {/* <section className="text-center pt-24 max-w-lg mx-auto"> */}
        {/*   {tags.map((tag, index) => ( */}
        {/*     <Tag */}
        {/*       className="mx-6 mt-5 cursor-pointer hover:scale-105 transition-transform" */}
        {/*       onClick={() => selectTag(tag.text)} */}
        {/*       key={index} */}
        {/*       color={tag.color} */}
        {/*     > */}
        {/*       {tag.text} */}
        {/*     </Tag> */}
        {/*   ))} */}
        {/* </section> */}

        {/* Display all fossils */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-24 pb-8">
          {fossils?.map((fossil, index) => (
            <Fossil key={index} fossil={fossil} />
          ))}
        </section>
      </main>
    </Fragment>
  );
};

export default Home;
