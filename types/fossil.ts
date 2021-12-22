import { TagColor } from "../components/Tag";

export type LinkType = "geo" | "museum" | "ref";

export type Link = {
  type: LinkType;
  src: string;
};

export type Links = Link[];

export type Tag = {
  text: string;
  color: TagColor;
};

export type Fossil = {
  tag: Tag;
  name: string;
  lifetime: number;
  imgSrc: string;
  links: Links;
};
export type Fossils = Fossil[];
