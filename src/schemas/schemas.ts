import { z } from "zod/v4";

/* REUSABLE */

export const ApiArtArtworkSchema = z.object({
  id: z.number().int(),
  title: z.string().nullable(),
  image_id: z.string().nullable(),
});

/* SINGLE ARTWORK */

export const ApiArtSingleArtworkSchema = z.object({
  data: ApiArtArtworkSchema,
});

/* MULTIPLE ARTWORKS */

export const ApiArtPaginationSchema = z.object({
  total: z.number().int(),
  limit: z.number().optional(),
  offset: z.number(),
  total_pages: z.number().int(),
  current_page: z.number().positive(),
  next_url: z.string().nullable().optional(),
});

export const ApiArtSchema = z.object({
  pagination: ApiArtPaginationSchema.optional(),
  data: z.array(ApiArtArtworkSchema),
});

/* SEARCH RESULTS */

export const ApiArtSearchThumbnailSchema = z.object({
  lqip: z.string(),
  width: z.number().int(),
  height: z.number().int(),
});

export const ApiArtSearchDataSchema = z.object({
  api_link: z.url(),
  id: z.number().int(),
  title: z.string().nullable(),
  thumbnail: ApiArtSearchThumbnailSchema.optional().nullable(),
  image_id: z.string().nullable().optional(),
});

export const ApiArtSearchSchema = z.object({
  data: z.array(ApiArtSearchDataSchema),
});

/* SEARCH INPUT FORM */

export const SearchFormSchema = z.object({
  search: z
    .string()
    .trim()
    .min(1, "Please enter a search term")
    .max(100, "Search term is too long"),
});
