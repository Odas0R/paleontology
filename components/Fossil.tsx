import {
  LibraryIcon,
  LinkIcon,
  PencilIcon,
  StarIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import { useDisclosure } from "hooks";
import Image from "next/image";

import type { Fossil } from "../types";
import EventDialog from "./EventDialog";
import FossilForm, { FossilFormData } from "./FossilForm";
import Tag from "./Tag";

export type FossilProps = {
  fossil: Fossil;
  editable?: boolean;
  favourite?: boolean;
};

export default function Fossil({ fossil, favourite, editable }: FossilProps) {
  const { open, handleOpen, onClose } = useDisclosure();

  const onSubmit = (data: FossilFormData) => console.log(data);

  const handleRemove = () => console.log("removed fossil");
  const handleFavourite = () => console.log("added to favourite");
  const handleUnfavourite = () => console.log("unfavourite");

  return (
    <div className="group relative aspect-w-1 aspect-h-1 hover:scale-[1.02] transition-all hover:z-10">
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
            <a
              href={fossil.referenceUrl}
              target="_blank"
              rel="noreferrer"
              className="h-10 w-10 flex justify-center items-center rounded-full ring-2 ring-white bg-transparent text-white transition-transform hover:-translate-y-1"
            >
              <LinkIcon width="24px" height="24px" />
            </a>

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

          {!favourite && !editable && (
            <button
              onClick={handleFavourite}
              className="hidden group-hover:flex absolute p-[0.85rem] bg-yellow-400 rounded-full text-yellow-800 -right-5 -top-5 focus:outline-none focus:ring focus:ring-yellow-300"
            >
              <StarIcon width="18px" height="18px" />
            </button>
          )}

          {favourite && (
            <button
              onClick={handleUnfavourite}
              className="hidden group-hover:flex absolute p-[0.85rem] bg-red-500 rounded-full -right-5 -top-5 focus:outline-none focus:ring focus:ring-red-400"
            >
              <TrashIcon width="18px" height="18px" />
            </button>
          )}

          {editable && (
            <FossilForm
              open={open}
              onClose={onClose}
              onSubmit={onSubmit}
              handleRemove={handleRemove}
              initialValue={fossil}
            >
              <button
                onClick={handleOpen}
                className="hidden group-hover:flex absolute p-[0.85rem] bg-green-400 rounded-full text-green-900 -right-5 -top-5 focus:outline-none focus:ring focus:ring-green-300"
              >
                <PencilIcon width="18px" height="18px" />
              </button>
            </FossilForm>
          )}
        </div>
      </div>
    </div>
  );
}
