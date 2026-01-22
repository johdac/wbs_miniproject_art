import { artService } from "../services/artService";
import { useLoaderData, type LoaderFunctionArgs } from "react-router";

export const HomePageLoader = async ({ request }: LoaderFunctionArgs) => {
  return artService(request.signal);
};

export const HomePage = () => {
  const art = useLoaderData<typeof HomePageLoader>();
  return (
    <>
      <div className="container">
        <h1>Art</h1>
        <ul>
          {art.data.map((piece) => {
            return <li key={piece.id}>{piece.title}</li>;
          })}
        </ul>
      </div>
    </>
  );
};
