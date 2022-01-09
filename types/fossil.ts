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

export type TagEntity = {
  value: string;
  color: TagColor;
};

export type AuthorEntity = {
  id: string;
  name: string;
  avatar_url: string;
};

export type FossilEntity = {
  tag: TagEntity;
  period: FossilPeriod;
  name: string;
  lifetime: number;
  img_src: string;
  referenceUrl: string;
  event: EventEntity | undefined;
  author: AuthorEntity;
};

export type EventEntity = {
  title: string;
  description: string;
  fossils: Fossils;
};

export type Fossils = FossilEntity[];
