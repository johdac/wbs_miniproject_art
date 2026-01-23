import { createBrowserRouter } from "react-router";
import { HomePage, HomePageLoader } from "./pages/HomePage";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { ErrorPage } from "./pages/ErrorPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { SearchPage, SearchPageLoader } from "./pages/SearchPage";
import { ArtworkPage, ArtworkPageLoader } from "./pages/ArtworkPage";
import { FavoritesPage } from "./pages/FavoritesPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: DefaultLayout,
    ErrorBoundary: ErrorPage,
    children: [
      {
        ErrorBoundary: ErrorPage,
        children: [
          {
            index: true,
            Component: HomePage,
            loader: HomePageLoader,
          },
          {
            path: "search",
            Component: SearchPage,
            loader: SearchPageLoader,
          },
          {
            path: "favorites",
            Component: FavoritesPage,
          },
          {
            path: ":id",
            Component: ArtworkPage,
            loader: ArtworkPageLoader,
          },
          {
            path: "*",
            Component: NotFoundPage,
          },
        ],
      },
    ],
  },
]);
