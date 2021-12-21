import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Paleontology</title>
        <meta name="description" content="Paleontology project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mt-14">
          <h1 className="text-gray-900 text-4xl tracking-tight font-extrabold sm:text-5xl">
            Discovering Paleontology
          </h1>
          <p className="mt-4 max-w-3xl space-y-6">
            Paleontology is the study of the history of life on Earth as based
            on fossils. Fossils are the remains of plants, animals, fungi,
            bacteria, and single-celled living things that have been replaced by
            rock material or impressions of organisms preserved in rock.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
