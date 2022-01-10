import { db } from "lib";
import { FossilEntity, Fossils, ServiceResourceId } from "types";

const TABLE_OR_VIEW_NAME = "fossil";
const TABLE_OR_VIEW_NAME_FAVOURITE = "fossil_favourite";

export async function create(
  payload: Partial<
    Omit<Omit<FossilEntity, "author">, "tag"> & { user_id: string; tag: string }
  >,
): Promise<FossilEntity> {
  const data = db.getData(
    await db
      .from(TABLE_OR_VIEW_NAME)
      .insert(payload)
      .select(
        "id, name, lifetime, tag!value(*), img_src, period, reference_url, author:user_profile!user_fkey(*), event(id,title,description, fossils:fossil!id(id,name,lifetime,tag!value(*),img_src,period,reference_url,author:user_profile!user_fkey(*)))",
      )
      .single(),
  );

  return data;
}

export async function update(
  id: ServiceResourceId,
  payload: Partial<
    Omit<Omit<FossilEntity, "author">, "tag"> & { user_id: string; tag: string }
  >,
): Promise<FossilEntity> {
  const data = db.getData(
    await db
      .from(TABLE_OR_VIEW_NAME)
      .update(payload)
      .match({ id: id })
      .select(
        "id, name, lifetime, tag!value(*), img_src, period, reference_url, author:user_profile!user_fkey(*), event(id,title,description, fossils:fossil!id(id,name,lifetime,tag!value(*),img_src,period,reference_url,author:user_profile!user_fkey(*)))",
      )
      .single(),
  );

  return data;
}

export async function remove(id: ServiceResourceId): Promise<FossilEntity> {
  const data = db.getData(
    await db.from(TABLE_OR_VIEW_NAME).delete().match({ id: id }).single(),
  );

  return data;
}

export async function favourite(
  fossilId: ServiceResourceId,
  userId: ServiceResourceId,
): Promise<void> {
  const data = db.getData(
    await db
      .from(TABLE_OR_VIEW_NAME_FAVOURITE)
      .insert({ fossil_id: fossilId, user_id: userId }),
  );

  return data;
}

export async function unfavourite(fossilId: ServiceResourceId): Promise<void> {
  const data = db.getData(
    await db
      .from(TABLE_OR_VIEW_NAME_FAVOURITE)
      .delete()
      .match({ fossil_id: fossilId }),
  );

  return data;
}

export async function getAll(): Promise<Fossils> {
  const data = db.getData(
    await db
      .from(TABLE_OR_VIEW_NAME)
      .select(
        "id, name, lifetime, tag!value(*), img_src, period, reference_url, author:user_profile!user_fkey(*), event(id,title,description, fossils:fossil!id(id,name,lifetime,tag!value(*),img_src,period,reference_url,author:user_profile!user_fkey(*)))",
      ),
  );

  return data;
}

export async function getAllByTag(tag: string): Promise<Fossils> {
  const data = db.getData(
    await db
      .from(TABLE_OR_VIEW_NAME)
      .select(
        "id, name, lifetime, tag!value(*), img_src, period, reference_url, author:user_profile!user_fkey(*), event(id,title,description,fossils:fossil!id(id,name,lifetime,tag!value(*),img_src,period,reference_url,author:user_profile!user_fkey(*)))",
      )
      .eq("tag", tag),
  );

  return data;
}

export async function getAllByAuthor(
  authorId: ServiceResourceId,
): Promise<Fossils> {
  const data = db.getData(
    await db
      .from(TABLE_OR_VIEW_NAME)
      .select(
        "id, name, lifetime, tag!value(*), img_src, period, reference_url, author:user_profile!user_fkey(*), event(id,title,description,fossils:fossil!id(id,name,lifetime,tag!value(*),img_src,period,reference_url,author:user_profile!user_fkey(*)))",
      )
      .eq("user_id", authorId),
  );

  return data;
}

export async function getAllByAuthorFavourites(
  authorId: ServiceResourceId,
): Promise<{ fossil: FossilEntity }[]> {
  const data = db.getData(
    await db
      .from(TABLE_OR_VIEW_NAME_FAVOURITE)
      .select(
        "fossil(id, name, lifetime, tag!value(*), img_src, period, reference_url, author:user_profile!user_fkey(*), event(id,title,description,fossils:fossil!id(id,name,lifetime,tag!value(*),img_src,period,reference_url,author:user_profile!user_fkey(*))))",
      )
      .eq("user_id", authorId),
  );

  return data;
}

export async function getAllFromEra(era: Era): Promise<Fossils> {
  const periodOr = getPeriodsFromEra(era);
  const data = db.getData(
    await db
      .from(TABLE_OR_VIEW_NAME)
      .select(
        "id, name, lifetime, tag!value(*), img_src, period, reference_url, author:user_profile!user_fkey(*), event(*)",
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
  create,
  update,
  remove,
  favourite,
  unfavourite,
  getAll,
  getAllByTag,
  getAllByAuthor,
  getAllByAuthorFavourites,
  getAllFromEra,
};
