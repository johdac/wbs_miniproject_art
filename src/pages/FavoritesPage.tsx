import { useFavoriteArtStore } from "../store/favoriteArtStore";
import { artService } from "../services/artService";
import type { LoaderFunctionArgs } from "react-router";
import { useLoaderData } from "react-router";
import { Artwork } from "../components/Artwork";

export const FavoritePageLoader = async ({ request }: LoaderFunctionArgs) => {
  const favorites = useFavoriteArtStore.getState().favorites;
  const favoritesIds = favorites.filter((f) => f.isFavorite).map((f) => f.id);
  if (favoritesIds.length === 0) return undefined;
  return artService.getArt(`ids=${favoritesIds.join(",")}`, request.signal);
};

export const FavoritesPage = () => {
  const art = useLoaderData<typeof FavoritePageLoader>();
  console.log(art);
  if (art === undefined) {
    return (
      <>
        <div className="container">
          <div className="flex justify-center mt-20 text-3xl">
            No favorites added yet.
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="container">
        <ul className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-20">
          {art.data.map((piece) => {
            return (
              <Artwork
                key={piece.id}
                imgId={piece.image_id ?? ""}
                title={piece.title ?? ""}
                artId={piece.id}
                artist={piece.artist_title}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};
