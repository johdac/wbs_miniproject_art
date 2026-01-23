import { SearchFormSchema } from "../schemas/schemas";
import type { LoaderFunctionArgs } from "react-router";
import { artService } from "../services/artService";
import { SearchBar } from "../components/SearchBar";
import { useLoaderData } from "react-router";
import { Artwork } from "../components/Artwork";

export const SearchPageLoader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const searchParam = url.searchParams.get("search");
  const parsed = SearchFormSchema.safeParse({ search: searchParam });
  if (!parsed.success) {
    throw new Response("Invalid search", { status: 400 });
  }
  return artService.searchArt(parsed.data.search, request.signal);
};

export const SearchPage = () => {
  const results = useLoaderData<typeof SearchPageLoader>();
  console.log("results", results);
  return (
    <>
      <div className="container">
        <h1>Search</h1>
        <div>
          <ul className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-20">
            {results.data.map((result) => {
              return (
                <Artwork
                  key={result.id}
                  imgId={result.image_id ?? ""}
                  title={result.title ?? ""}
                  artId={result.id}
                  artist={result.artist_title}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
