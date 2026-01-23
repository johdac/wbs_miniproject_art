import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Favorite } from "../types/types";

type FavoriteArtState = {
  favorites: Favorite[];
  isFavorite: (id: string) => boolean;
  toggleFavorite: (id: string) => void;
  editNote: (id: string, note: string) => void;
  getNote: (id: string) => string;
};

export const useFavoriteArtStore = create<FavoriteArtState>()(
  persist(
    (set, get) => ({
      favorites: [],
      isFavorite: (id) =>
        get().favorites.some((f) => f.id === id && f.isFavorite),
      toggleFavorite: (id) => {
        set((state) => {
          const index = state.favorites.findIndex((f) => f.id === id);
          // If we found the entry need to flip tha fav stats
          if (index !== -1) {
            const newFavArr = [...state.favorites];
            // Replace the entry ad the found index
            newFavArr[index] = {
              ...newFavArr[index], // first we spread the object
              isFavorite: !newFavArr[index].isFavorite, // flip value
            };
            return { favorites: newFavArr };
          }
          // Else create entry
          return {
            favorites: [...state.favorites, { id, isFavorite: true, note: "" }],
          };
        });
      },
      editNote: (id, note) => {
        // Same approach as above
        set((state) => {
          const index = state.favorites.findIndex((f) => f.id === id);
          if (index !== -1) {
            const newFavArr = [...state.favorites];
            newFavArr[index] = {
              ...newFavArr[index],
              note,
            };
            return { favorites: newFavArr };
          }
          return {
            favorites: [...state.favorites, { id, isFavorite: false, note }],
          };
        });
      },
      getNote: (id) => get().favorites.find((f) => f.id === id)?.note ?? "",
    }),
    {
      name: "favorites",
    },
  ),
);
