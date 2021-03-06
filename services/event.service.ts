import { db } from "lib";
import { EventEntity } from "types";

const TABLE_OR_VIEW_NAME = "event";

export async function create(payload: {
  event: Partial<EventEntity>;
  fossils: string[];
}): Promise<EventEntity> {
  const data = db.getData(
    await db
      .from(TABLE_OR_VIEW_NAME)
      .insert(payload)
      .select(
        "id, title, description, author:user_profile!user_id(*), fossils:fossil(id,name,lifetime,tag!value(*),img_src,period,reference_url,author:user_profile!user_fkey(*))",
      )
      .single(),
  );

  return data;
}

export async function getAll(): Promise<EventEntity[]> {
  const data = db.getData(
    await db
      .from(TABLE_OR_VIEW_NAME)
      .select(
        "id, title, description, author:user_profile!user_id(*), fossils:fossil(id,name,lifetime,tag!value(*),img_src,period,reference_url,author:user_profile!user_fkey(*))",
      ),
  );

  return data;
}

export async function getAllByAuthor(id: string): Promise<EventEntity[]> {
  const data = db.getData(
    await db
      .from(TABLE_OR_VIEW_NAME)
      .select(
        "id, title, description, author:user_profile!user_id(*), fossils:fossil(id,name,lifetime,tag!value(*),img_src,period,reference_url,author:user_profile!user_fkey(*))",
      )
      .eq("user_id", id),
  );

  return data;
}

export const EventService = {
  getAll,
  getAllByAuthor,
};
