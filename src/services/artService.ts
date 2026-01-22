import { z } from "zod/v4";
import { fetchJson } from "../lib/fetchJson";
import { ApiGeneralSchema } from "../schemas";

export async function artService(signal: AbortSignal) {
  const resData = await fetchJson(
    "https://api.artic.edu/api/v1/artworks",
    signal,
  );
  const { data, success, error } = ApiGeneralSchema.safeParse(resData);
  if (!success) throw new Error(z.prettifyError(error));
  return data;
}
