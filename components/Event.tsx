import { useDisclosure } from "hooks";
import Image from "next/image";
import { EventEntity as EventEntity } from "types";

import EventDialog from "./EventDialog";

type Props = {
  event: EventEntity;
};

export default function Event({ event }: Props) {
  const { open, onClose, handleOpen } = useDisclosure();

  return (
    <EventDialog open={open} onClose={onClose} event={event}>
      <div
        onClick={handleOpen}
        className="group relative aspect-w-1 aspect-h-1 hover:scale-[1.02] transition-all"
      >
        {/* Event Images */}
        <div className="w-full h-full">
          <div className="absolute h-full w-full inset-0 z-[4] shadow shadow-black rounded-lg">
            <Image
              className="rounded-lg"
              src={event.fossils[0].img_src}
              layout="fill"
              alt="Profile image"
            />
          </div>
          {event.fossils[1] && (
            <div className="absolute h-full w-full z-[3] right-[-1rem] shadow shadow-black rounded-lg ">
              <Image
                className="rounded-lg"
                src={event.fossils[1].img_src}
                layout="fill"
                alt="Profile image"
              />
            </div>
          )}
          {event.fossils[2] && (
            <div className="absolute h-full w-full z-[2] right-[-2rem] shadow shadow-black rounded-lg">
              <Image
                className="rounded-lg"
                src={event.fossils[2].img_src}
                layout="fill"
                alt="Profile image"
              />
            </div>
          )}
          {event.fossils[3] && (
            <div className="absolute h-full w-full z-[2] right-[-2rem] shadow shadow-black rounded-lg">
              <Image
                className="rounded-lg"
                src={event.fossils[3].img_src}
                layout="fill"
                alt="Profile image"
              />
            </div>
          )}
        </div>
      </div>
    </EventDialog>
  );
}
