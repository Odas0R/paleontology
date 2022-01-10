import { db } from "lib";
import { AuthorEntity } from "types";

const TABLE_OR_VIEW_NAME = "user_profile";

export async function get(id: string): Promise<AuthorEntity> {
  const data = db.getData(
    await db.from(TABLE_OR_VIEW_NAME).select("*").eq("id", id).single(),
  );

  return data;
}

export const AuthorService = {
  get,
};
