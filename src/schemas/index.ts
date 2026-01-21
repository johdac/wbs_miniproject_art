import { z } from "zod/v4";

export const ApiArtSchema = z.object({
  id: z.number().int(),
  title: z.string().nullable(),
});

export const ApiPaginationSchema = z.object({
  total: z.number().int(),
  limit: z.number().optional(),
  offset: z.number(),
  total_pages: z.number().int(),
  current_page: z.number().positive(),
  next_url: z.string().nullable(),
});

export const ApiGeneralSchema = z.object({
  pagination: ApiPaginationSchema,
  data: z.array(ApiArtSchema),
});
