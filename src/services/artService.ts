import type { ApiGeneral } from "../types";
import { ApiGeneralSchema } from "../schemas";
import { z } from "zod/v4";

export async function getArt(signal: AbortSignal): Promise<ApiGeneral> {
  //Maybe we can remove the return type
  const res = await fetch("https://api.artic.edu/api/v1/artworks", { signal });
  if (!res.ok)
    throw new Error(`Network response was not ok: ${res.statusText}`);
  const resData = await res.json();
  const { data, success, error } = ApiGeneralSchema.safeParse(resData);
  if (!success) throw new Error(z.prettifyError(error));
  return data;
}
