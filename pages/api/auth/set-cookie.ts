import { db } from "lib";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  db.auth.api.setAuthCookie(req, res);
}
