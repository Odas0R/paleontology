import {
  LibraryIcon,
  LinkIcon,
  LocationMarkerIcon,
} from "@heroicons/react/outline";
import Image from "next/image";

import type { Fossil } from "../types";
import Tag from "./Tag";

export type FossilProps = {
  fossil: Fossil;
};

export default function Fossil({ fossil }: FossilProps) {
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
              <a
                key={index}
                href={link.src}
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 flex justify-center items-center rounded-full ring-2 ring-white bg-transparent text-white transition-transform hover:-translate-y-1"
              >
                {link.type === "ref" && <LinkIcon width="24px" height="24px" />}
                {link.type === "museum" && (
                  <LibraryIcon width="24px" height="24px" />
                )}
                {link.type === "geo" && (
                  <LocationMarkerIcon width="24px" height="24px" />
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}