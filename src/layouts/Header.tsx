import { Link } from "react-router";
import { SearchBar } from "../components/SearchBar";

export const Header = () => {
  return (
    <>
      <div className="container">
        <div className="flex justify-center items-center">
          <Link to="/" className="mr-4">
            <div>
              <svg width={28} height={28}>
                <use href="#home" />
              </svg>{" "}
            </div>
          </Link>
          <Link to="/favorites" className="mr-8">
            <div>
              <svg width={28} height={28}>
                <use href="#heart" />
              </svg>{" "}
            </div>
          </Link>
          <SearchBar />
        </div>
      </div>
    </>
  );
};
