import { db } from "lib";
import { Fossils } from "types";

const TABLE_OR_VIEW_NAME = "fossil";

export async function getAll(): Promise<Fossils> {
  const data = db.getData(
    await db
      .from(TABLE_OR_VIEW_NAME)
      .select(
        "id, name, lifetime, tag!value(*), img_src, period, reference_url, author:user_profile(*), event(*)",
      ),
  );

  return data;
}

const FossilsService = {
  getAll,
};

export default FossilsService;
