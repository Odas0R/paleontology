import { db } from "lib";
import { Fossils } from "types";

const TABLE_OR_VIEW_NAME = "fossil";

export async function getAll(): Promise<Fossils> {
  const data = db.getData(
    await db
      .from(TABLE_OR_VIEW_NAME)
      .select(
        "id, name, lifetime, tag!value(*), img_src, period, reference_url, author:user_profile(*), event(id,title,description, fossils:fossil!id(id,name,lifetime,tag!value(*),img_src,period,reference_url,author:user_profile(*)))",
      ),
  );

  return data;
}

export async function getAllByTag(tag: string): Promise<Fossils> {
  const data = db.getData(
    await db
      .from(TABLE_OR_VIEW_NAME)
      .select(
        "id, name, lifetime, tag!value(*), img_src, period, reference_url, author:user_profile(*), event(id,title,description,fossils:fossil!id(id,name,lifetime,tag!value(*),img_src,period,reference_url,author:user_profile(*)))",
      )
      .eq("tag", tag),
  );

  return data;
}

export async function getAllByAuthor(id: string): Promise<Fossils> {
  const data = db.getData(
    await db
      .from(TABLE_OR_VIEW_NAME)
      .select(
        "id, name, lifetime, tag!value(*), img_src, period, reference_url, author:user_profile(*), event(id,title,description,fossils:fossil!id(id,name,lifetime,tag!value(*),img_src,period,reference_url,author:user_profile(*)))",
      )
      .eq("user_id", id),
  );

  return data;
}

export async function getAllFromEra(era: Era): Promise<Fossils> {
  const periodOr = getPeriodsFromEra(era);
  const data = db.getData(
    await db
      .from(TABLE_OR_VIEW_NAME)
      .select(
        "id, name, lifetime, tag!value(*), img_src, period, reference_url, author:user_profile(*), event(*)",
      )
      .or(periodOr),
  );

  return data;
}

type Era = "precambrian" | "paleozoic" | "mesozoic" | "cenozoic";

function getPeriodsFromEra(era: Era) {
  switch (era) {
    case "precambrian":
      return "period.eq.precambrian";
    case "paleozoic":
      return "period.eq.permian,period.eq.carboniferous,period.eq.devonian,period.eq.silurian,period.eq.ordovician,period.eq.cambrian";
    case "mesozoic":
      return "period.eq.cretaceous,period.eq.jurassic,period.eq.triassic";
    case "cenozoic":
      return "period.eq.paleogene";
  }
}

export const FossilService = {
  getAll,
  getAllByTag,
  getAllByAuthor,
  getAllFromEra,
};
