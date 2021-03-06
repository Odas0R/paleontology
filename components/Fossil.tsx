import {
  LibraryIcon,
  LinkIcon,
  PencilIcon,
  StarIcon,
  UserRemoveIcon,
} from "@heroicons/react/outline";
import { useDisclosure } from "hooks";
import { getInitials } from "lib";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "providers";
import { useState } from "react";
import { FossilService } from "services";

import type { FossilEntity } from "../types";
import EventDialog from "./EventDialog";
import FossilForm, { FossilFormData } from "./FossilForm";
import Tag from "./Tag";

export type FossilProps = {
  data: FossilEntity;
  editable?: boolean;
  favourite?: boolean;
};

export default function Fossil({
  data,
  favourite = false,
  editable,
}: FossilProps) {
  const [isFavourite, setFavourite] = useState(favourite);
  const [fossil, setFossil] = useState<FossilEntity | undefined>(data);
  const { user } = useAuth();
  const { open, handleOpen, onClose } = useDisclosure();

  const onSubmit = async (data: FossilFormData) => {
    const updatedData = {
      name: data.name ? data.name : fossil?.name,
      tag: data.tag ? data.tag : fossil?.tag.value,
      period: data.period ? data.period : fossil?.period,
      lifetime: data.lifetime ? data.lifetime : fossil?.lifetime,
      reference_url: data.reference_url
        ? data.reference_url
        : fossil?.reference_url,
      img_src:
        "https://upload.wikimedia.org/wikipedia/commons/2/21/Paradoxides_sp.jpg",
    };

    const updatedFossil = await FossilService.update(fossil?.id, updatedData);
    setFossil(updatedFossil);
    onClose();
  };

  const handleRemove = async () => {
    await FossilService.remove(fossil?.id);
    setFossil(undefined);
    onClose();
  };

  const handleFavourite = async () => {
    await FossilService.favourite(fossil?.id, user?.id);
    setFavourite(true);
  };
  const handleUnfavourite = async () => {
    await FossilService.unfavourite(fossil?.id);
    setFavourite(false);
  };

  return fossil ? (
    <div className="group relative aspect-w-1 aspect-h-1 hover:scale-[1.02] transition-all hover:z-10">
      <Image
        className="object-cover rounded-lg"
        src={fossil.img_src}
        layout="fill"
        alt=""
      />
      {/* overlay */}
      <div className="absolute h-full ring-1 ring-inset ring-black/10 rounded-lg group-hover:bg-black group-hover:opacity-50"></div>

      <div className="absolute inset-0 flex h-full p-5 flex-col justify-between">
        {/* top information */}
        <div className="flex justify-between items-center h-10">
          {/* Avatar */}
          <Link href={`/profile/${fossil.author.id}`}>
            <a className="hidden group-hover:flex h-10 w-10 justify-center items-center rounded-full ring-2 ring-gray-500 bg-gray-500 text-white relative">
              {fossil.author.avatar_url ? (
                <Image
                  className="object-cover rounded-full"
                  src={fossil.author.avatar_url}
                  layout="fill"
                  alt=""
                />
              ) : (
                <span>{getInitials(fossil.author.name)}</span>
              )}
            </a>
          </Link>

          <Tag color={fossil.tag.color}>{fossil.tag.value}</Tag>
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
              href={fossil.reference_url}
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

          {!isFavourite && !editable && (
            <button
              onClick={handleFavourite}
              className="hidden group-hover:flex absolute p-[0.85rem] bg-yellow-400 rounded-full text-yellow-800 -right-5 -top-5 focus:outline-none focus:ring focus:ring-yellow-300"
            >
              <StarIcon width="18px" height="18px" />
            </button>
          )}

          {isFavourite && (
            <button
              onClick={handleUnfavourite}
              className="hidden group-hover:flex absolute p-[0.85rem] bg-red-500 rounded-full -right-5 -top-5 focus:outline-none focus:ring focus:ring-red-400"
            >
              <UserRemoveIcon width="18px" height="18px" />
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
  ) : (
    <div></div>
  );
}
