import { Link } from "react-router";

export const Artwork = ({
  imgId,
  title,
  id,
}: {
  imgId: string;
  title: string;
  id: number;
}) => {
  return (
    <>
      <li>
        <Link to={`/${id}`}>
          <img
            src={`https://www.artic.edu/iiif/2/${imgId}/full/843,/0/default.jpg`}
          />
          {title}
        </Link>
      </li>
    </>
  );
};
