import { TagColor } from "../components/Tag";

export type LinkType = "geo" | "museum" | "ref";

export type Link = {
  type: LinkType;
  src: string;
};

export type FossilPeriod =
  | "Paleogene"
  | "Cretaceous"
  | "Jurassic"
  | "Triassic"
  | "Permian"
  | "Carboniferous"
  | "Devonian"
  | "Silurian"
  | "Ordovician"
  | "Cambrian";

export type Links = Link[];

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
  links: Links;
  event: Event | undefined;
};

export type Event = {
  title: string;
  description: string;
  date: string;
  name: string;
  fossils: Fossils;
};

export type Fossils = Fossil[];
