import { db } from "lib";
import { TagEntity } from "types";

const TABLE_OR_VIEW_NAME = "tag";

export async function getAll(): Promise<TagEntity[]> {
  const data = db.getData(await db.from(TABLE_OR_VIEW_NAME).select("*"));

  return data;
}

export const TagService = {
  getAll,
};
