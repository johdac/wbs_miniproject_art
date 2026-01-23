import { artService } from "../services/artService";
import { useLoaderData, type LoaderFunctionArgs } from "react-router";
import { SearchBar } from "../components/SearchBar";
import { Artwork } from "../components/Artwork";

export const HomePageLoader = async ({ request }: LoaderFunctionArgs) => {
  return artService.getArt("", request.signal);
};

export const HomePage = () => {
  const art = useLoaderData<typeof HomePageLoader>();
  console.log(art);
  return (
    <>
      <div className="container">
        <h1>Art</h1>
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
