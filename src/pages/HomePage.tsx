import { artService } from "../services/artService";
import { useLoaderData, type LoaderFunctionArgs } from "react-router";
import { SearchBar } from "../components/Searchbar";
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
        <SearchBar />
        <ul>
          {art.data.map((piece) => {
            return (
              <Artwork
                key={piece.id}
                imgId={piece.image_id ?? ""}
                title={piece.title ?? ""}
                id={piece.id}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};
