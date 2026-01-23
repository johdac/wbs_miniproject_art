import { useFavoriteArtStore } from "../store/favoriteArtStore";

export const Heart = ({ artId }: { artId: string }) => {
  const isFavorite = useFavoriteArtStore((s) => s.isFavorite(artId));
  const toggleFavorite = useFavoriteArtStore((s) => s.toggleFavorite);
  let heart;
  if (isFavorite) heart = <use href="#heart" fill="red" />;
  else heart = <use href="#heart" />;

  return (
    <>
      {" "}
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
      </button>{" "}
    </>
  );
};
