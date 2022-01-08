import { LibraryIcon, LinkIcon, StarIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useState } from "react";

import type { Fossil } from "../types";
import EventDialog from "./EventDialog";
import Tag from "./Tag";

export type FossilProps = {
  fossil: Fossil;
};

export default function Fossil({ fossil }: FossilProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <div className="group relative aspect-w-1 aspect-h-1 hover:scale-[1.02] transition-all">
      <Image
        className="object-cover rounded-lg"
        src={fossil.imgSrc}
        layout="fill"
        alt=""
      />
      {/* overlay */}
      <div className="absolute h-full ring-1 ring-inset ring-black/10 rounded-lg group-hover:bg-black group-hover:opacity-50"></div>

      <div className="absolute inset-0 flex h-full p-5 flex-col justify-between">
        {/* top information */}
        <div className="flex justify-between items-center h-10">
          {/* Avatar */}
          <div className="hidden group-hover:inline-flex h-10 w-10 justify-center items-center rounded-full ring-2 ring-gray-500 bg-gray-500 text-white">
            <span>GR</span>
          </div>
          <Tag color={fossil.tag.color}>{fossil.tag.text}</Tag>
          <div className="pl-3 hidden group-hover:block text-yellow-400">
            <StarIcon width="18px" height="18px" />
          </div>
        </div>
        {/* bottom information */}
        <div className="hidden group-hover:block">
          <div className="flex justify-between">
            <div className="text-2xl xl:text-xl font-medium text-gray-100">
              {fossil.name}
            </div>

            <div className="text-md font-medium text-gray-100 mt-[2px]">
              {fossil.lifetime} m.y
            </div>
          </div>
          <div className="flex mx-auto justify-center items-center pt-8 pb-1 gap-4">
            {fossil.links.map((link, index) => (
              <div key={index}>
                {link.type === "ref" && (
                  <a
                    href={link.src}
                    target="_blank"
                    rel="noreferrer"
                    className="h-10 w-10 flex justify-center items-center rounded-full ring-2 ring-white bg-transparent text-white transition-transform hover:-translate-y-1"
                  >
                    <LinkIcon width="24px" height="24px" />
                  </a>
                )}
              </div>
            ))}
            {fossil.event && (
              <EventDialog open={open} onClose={onClose} event={fossil.event}>
                <button
                  onClick={handleOpen}
                  className="h-10 w-10 flex justify-center items-center rounded-full ring-2 ring-white bg-transparent text-white transition-transform hover:-translate-y-1"
                >
                  <LibraryIcon width="24px" height="24px" />
                </button>
              </EventDialog>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
