import type { LoaderFunctionArgs } from "react-router";
import { artService } from "../services/artService";
import { useLoaderData } from "react-router";
import DOMPurify from "dompurify";
import { Heart } from "../components/Heart";
import { useFavoriteArtStore } from "../store/favoriteArtStore";
import { useState } from "react";

export const ArtworkPageLoader = async ({
  params,
  request,
}: LoaderFunctionArgs) => {
  const { id } = params;
  return artService.getSingleArtwork(id ?? "", request.signal);
};

export const ArtworkPage = () => {
  const artwork = useLoaderData<typeof ArtworkPageLoader>();
  const artworkId = artwork.data.id;
  const imageId = artwork.data.image_id;
  const safeDescription = artwork.data.description
    ? DOMPurify.sanitize(artwork.data.description)
    : "";
  const storedNote = useFavoriteArtStore((s) => s.getNote(artworkId));
  const editNote = useFavoriteArtStore((s) => s.editNote);
  const [note, setNote] = useState(storedNote);
  const [showSavedNotifiction, setshowSavedNotifiction] = useState(false);

  const handleSave = () => {
    editNote(artworkId, note);
    setshowSavedNotifiction(true);
    setTimeout(() => setshowSavedNotifiction(false), 2000);
  };

  return (
    <>
      <div className="container max-w-220">
        <div className="flex justify-center">
          <img
            className="max-h-[70vh] w-auto"
            src={`https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`}
            alt=""
          />
        </div>
        <div className="flex justify-between mt-10 items-start">
          <div className="grow mr-6">
            <div className="font-bold">{artwork.data.artist_title}</div>
            <div>{artwork.data.title}</div>
            <div
              className="my-10"
              dangerouslySetInnerHTML={{ __html: safeDescription }}
            />
          </div>
          <Heart artId={artworkId} />
        </div>
        <div>
          <label className="label font-bold text-xs mb-2">Notes</label>
          <div>
            <textarea
              className="input w-full textarea"
              rows={5}
              name="notes"
              placeholder="Add your notes"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>
          {showSavedNotifiction && (
            <div role="alert" className="alert alert-success mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Your notes were updated</span>
            </div>
          )}
          <button className="mt-2 btn" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </>
  );
};
