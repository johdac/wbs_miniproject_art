import { z } from "zod/v4";

import {
  ApiArtSchema,
  ApiArtArtworkSchema,
  ApiArtPaginationSchema,
  ApiArtSingleArtworkSchema,
  ApiArtSearchSchema,
  SearchFormSchema,
} from "../schemas/schemas";

export type ApiArtArtworkDto = z.infer<typeof ApiArtArtworkSchema>;
export type ApiArtDto = z.infer<typeof ApiArtSchema>;
export type ApiArtPaginationDto = z.infer<typeof ApiArtPaginationSchema>;
export type ApiArtSearchDto = z.infer<typeof ApiArtSearchSchema>;
export type ApiArtSingleArtworkDto = z.infer<typeof ApiArtSingleArtworkSchema>;
export type SearchFormDto = z.infer<typeof SearchFormSchema>;

export type Favorite = {
  id: string;
  isFavorite: boolean;
  note: string;
};
