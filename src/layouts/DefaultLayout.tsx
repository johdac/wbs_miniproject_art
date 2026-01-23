import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router";

export const DefaultLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
