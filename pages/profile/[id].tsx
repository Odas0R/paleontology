import type { NextPage } from "next";
import Head from "next/head";
import { Fragment, useEffect, useState } from "react";

import Fossil from "../../components/Fossil";
import Navbar from "../../components/Navbar";
import { Fossils } from "../../types";

const Profile: NextPage = () => {
  const [fossils, setFossils] = useState<Fossils>([]);
  useEffect(() => {
    const getData = async () => {
      setFossils([]);
    };

    getData();
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
            <h1 className="text-gray-900 text-2xl tracking-tight font-bold sm:text-3xl">
              Events
            </h1>
          </div>
          {/* Display all fossils */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-16  pb-8">
            {fossils.map((fossil, index) => (
              <Fossil key={index} fossil={fossil} />
            ))}
          </section>
          <div className="text-left mx-auto mt-14">
            <h1 className="text-gray-900 text-2xl tracking-tight font-bold sm:text-3xl">
              Fossils
            </h1>
          </div>
          {/* Display all fossils */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-16 pb-8">
            {fossils.map((fossil, index) => (
              <Fossil key={index} fossil={fossil} />
            ))}
          </section>
        </div>
      </main>
    </Fragment>
  );
};

export default Profile;
