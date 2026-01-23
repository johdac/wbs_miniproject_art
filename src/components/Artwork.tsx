import { Link } from "react-router";
import { Heart } from "./Heart";

type ArtworkProps = {
  imgId: string;
  title: string;
  artId: string;
  artist: string | null;
};

export const Artwork = ({ imgId, title, artId, artist }: ArtworkProps) => {
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
            <div className="absolute w-full left-0 bottom-0 flex h-22 justify-between">
              <div>
                <div className="font-bold">{artist ?? artist}</div>
                {title}
              </div>
              <div className="ml-4 pt-1">
                <Heart artId={artId} />
              </div>
            </div>
          </div>
        </Link>
      </li>
    </>
  );
};
