import type { LoaderFunctionArgs } from "react-router";
import { artService } from "../services/artService";
import { useLoaderData } from "react-router";

export const ArtworkPageLoader = async ({
  params,
  request,
}: LoaderFunctionArgs) => {
  const { id } = params;
  return artService.getSingleArtwork(id ?? "", request.signal);
};

export const ArtworkPage = () => {
  const artwork = useLoaderData<typeof ArtworkPageLoader>();
  console.log("artwork: ", artwork);
  return <>ArtworkPage</>;
};
