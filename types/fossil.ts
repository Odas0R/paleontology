import { TagColor } from "../components/Tag";

export type FossilPeriod =
  | "paleogene"
  | "cretaceous"
  | "jurassic"
  | "triassic"
  | "permian"
  | "carboniferous"
  | "devonian"
  | "silurian"
  | "ordovician"
  | "cambrian"
  | "precambrian";

export type Tag = {
  text: string;
  color: TagColor;
};

export type Fossil = {
  tag: Tag;
  period: FossilPeriod;
  name: string;
  lifetime: number;
  imgSrc: string;
  referenceUrl: string;
  event: Event | undefined;
};

export type Event = {
  title: string;
  description: string;
  fossils: Fossils;
};

export type Fossils = Fossil[];
