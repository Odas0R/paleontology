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

export const FossilService = {
  getAll,
  getAllByTag,
  getAllByAuthor,
};
