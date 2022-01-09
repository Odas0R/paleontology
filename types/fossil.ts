import { TagColor } from "../components/Tag";

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
  date: string;
  fossils: Fossils;
};

export type Fossils = Fossil[];
