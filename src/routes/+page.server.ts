import fs from "node:fs";
import path from "node:path";
import type { PageServerLoad } from "./$types";
import type { ContentType } from "./proxy+page.server";

export const load: PageServerLoad = async (_event) => {
  const pathFile = "src/lib/assets/";
  const rfs = fs.readFileSync(path.join(`${pathFile}data.json`), "utf8");
  const content: ContentType[] = JSON.parse(rfs);

  return { content };
};
