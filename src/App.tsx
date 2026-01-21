import { useEffect, useState } from "react";
import type { ApiGeneral } from "./types";
import { getArt } from "./services/artService";

function App() {
  const [apiData, setApiData] = useState<ApiGeneral | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        const data = await getArt(controller.signal);
        console.log(data);
        setApiData(data);
      } catch (err) {
        if (err instanceof DOMException && err.name === "AbortError") {
          return;
        }
        console.error(err);
      }
    })();
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <div className="container">
        <h1>Art</h1>
        <ul>
          {apiData?.data.map((piece) => {
            return <li key={piece.id}>{piece.title}</li>;
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
