import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import { SvgSprite } from "./lib/IconLibrary.tsx";
import { router } from "./router.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SvgSprite />
    <RouterProvider router={router} />
  </StrictMode>,
);
