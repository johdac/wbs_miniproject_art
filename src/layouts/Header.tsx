import { Link } from "react-router";
import { SearchBar } from "../components/SearchBar";

export const Header = () => {
  return (
    <>
      <div className="container">
        <div className="flex justify-center">
          <Link to="/" className="mr-4">
            <div>
              <svg width={24} height={24}>
                <use href="#home" />
              </svg>{" "}
            </div>
          </Link>
          <Link to="/favorites" className="mr-4">
            <div>
              <svg width={24} height={24}>
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
