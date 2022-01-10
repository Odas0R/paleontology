import { getInitials } from "lib";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import { AuthorService, EventService, FossilService } from "services";

import Event from "../../components/Event";
import Fossil from "../../components/Fossil";
import Navbar from "../../components/Navbar";
import { AuthorEntity, EventEntity, Fossils } from "../../types";

const Profile: NextPage = () => {
  const [author, setAuthor] = useState<AuthorEntity>();
  const [fossils, setFossils] = useState<Fossils>([]);
  const [events, setEvents] = useState<EventEntity[]>([]);

  const {
    query: { id },
  } = useRouter();

  useEffect(() => {
    const getData = async () => {
      if (id && !Array.isArray(id)) {
        const author = await AuthorService.get(id);
        const fossils = await FossilService.getAllByAuthor(id);
        const events = await EventService.getAllByAuthor(id);
        setAuthor(author);
        setFossils(fossils);
        setEvents(events);
      }
    };

    getData();
  }, [id]);
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
            <div className="flex h-20 w-20 text-2xl text-center justify-center items-center rounded-full bg-gray-500 text-white mx-auto relative">
              {author &&
                (author.avatar_url ? (
                  <Image
                    className="object-cover rounded-full"
                    src={author.avatar_url}
                    layout="fill"
                    alt=""
                  />
                ) : (
                  <span>{author.name ? getInitials(author.name) : ""}</span>
                ))}
            </div>
            <div className="text-center justify-center items-center text-gray-500 mt-4">
              <span className="text-xl capitalize">
                {author ? author.name : "loading..."}
              </span>
            </div>
          </div>
          <div className="text-left mx-auto mt-14">
            <h1 className="text-gray-900 text-2xl tracking-tight font-bold sm:text-3xl">
              Events
            </h1>
          </div>
          {/* Display all fossils */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-16  pb-8">
            {events.map((event, index) => (
              <Event key={index} event={event} />
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
              <Fossil key={index} data={fossil} />
            ))}
          </section>
        </div>
      </main>
    </Fragment>
  );
};

export default Profile;
