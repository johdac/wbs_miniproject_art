import { fetchJson } from "../lib/fetchJson";
import {
  ApiArtSchema,
  ApiArtSearchSchema,
  ApiArtSingleArtworkSchema,
} from "../schemas/schemas";

const BASE_URL = "https://api.artic.edu/api/v1/artworks/";
const FIELDS =
  "fields=id,title,image_id,thumbnail,api_link,date_display,artist_title,artist_display,dimensions,description";

export const artService = {
  getArt: async function (url: string, signal: AbortSignal) {
    const resData = await fetchJson(`${BASE_URL}${url}?${FIELDS}`, signal);
    const data = ApiArtSchema.parse(resData);
    return data;
  },

  getSingleArtwork: async function (url: string, signal: AbortSignal) {
    const resData = await fetchJson(`${BASE_URL}${url}?${FIELDS}`, signal);
    const data = ApiArtSingleArtworkSchema.parse(resData);
    return data;
  },

  searchArt: async function (query: string, signal: AbortSignal) {
    const resData = await fetchJson(
      `${BASE_URL}search?q=${encodeURIComponent(query)}&${FIELDS}`,
      signal,
    );
    const data = ApiArtSearchSchema.parse(resData);
    return data;
  },
};
