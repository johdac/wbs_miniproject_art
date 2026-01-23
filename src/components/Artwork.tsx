import { Link } from "react-router";
import { useFavoriteArtStore } from "../store/favoriteArtStore";

type ArtworkProps = {
  imgId: string;
  title: string;
  artId: string;
  artist: string | null;
};

export const Artwork = ({ imgId, title, artId, artist }: ArtworkProps) => {
  const isFavorite = useFavoriteArtStore((s) => s.isFavorite(artId));
  const toggleFavorite = useFavoriteArtStore((s) => s.toggleFavorite);
  let heart;
  if (isFavorite) heart = <use href="#heart" fill="red" />;
  else heart = <use href="#heart" />;

  return (
    <>
      <li>
        <Link to={`/${artId}`} className="h-full inline-block">
          <div className="mb-1 flex flex-col relative h-full">
            <div className="max-h-[30vh] max-w-[30vw] flex justify-center mb-32">
              <img
                className="max-h-full object-contain"
                src={`https://www.artic.edu/iiif/2/${imgId}/full/843,/0/default.jpg`}
              />
            </div>
            <div className="absolute left-0 bottom-0 flex h-22">
              <div className="mr-4 pt-1">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    toggleFavorite(artId);
                  }}
                >
                  <svg width={24} height={24} className="cursor-pointer">
                    {heart}
                  </svg>
                </button>
              </div>
              <div>
                <div className="font-bold">{artist ?? artist}</div>
                {title}
              </div>
            </div>
          </div>
        </Link>
      </li>
    </>
  );
};
