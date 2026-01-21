import { z } from "zod/v4";

import {
  ApiArtSchema,
  ApiGeneralSchema,
  ApiPaginationSchema,
} from "../schemas";

export type ApiGeneral = z.infer<typeof ApiGeneralSchema>;
export type ApiArt = z.infer<typeof ApiArtSchema>;
export type ApiPagination = z.infer<typeof ApiPaginationSchema>;
