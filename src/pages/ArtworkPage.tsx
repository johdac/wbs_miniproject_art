import type { LoaderFunctionArgs } from "react-router";
import { artService } from "../services/artService";
import { useLoaderData } from "react-router";
import DOMPurify from "dompurify";

export const ArtworkPageLoader = async ({
  params,
  request,
}: LoaderFunctionArgs) => {
  const { id } = params;
  return artService.getSingleArtwork(id ?? "", request.signal);
};

export const ArtworkPage = () => {
  const artwork = useLoaderData<typeof ArtworkPageLoader>();
  const safeDescription = artwork.data.description
    ? DOMPurify.sanitize(artwork.data.description)
    : "";

  type Favorites = {
    id: string;
    note: string;
  };
  const favoriteArtwork = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.id;
    const favorites: Favorites[] = JSON.parse(
      localStorage.getItem("favorites") ?? "[]",
    );

    const index = favorites.findIndex((fav) => fav.id === id);
    if (index !== -1) favorites.splice(index, 1)[0];
    else favorites.push({ id, note: "" });

    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  return (
    <>
      <img
        src={`https://www.artic.edu/iiif/2/${artwork.data.image_id}/full/843,/0/default.jpg`}
        alt=""
      />
      <button onClick={favoriteArtwork} id={String(artwork.data.id)}>
        Favorite
      </button>
      <h1>{artwork.data.title}</h1>
      <div>{artwork.data.artist_display}</div>
      <div dangerouslySetInnerHTML={{ __html: safeDescription }} />
    </>
  );
};
