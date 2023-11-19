import { create } from "zustand";

export const enum SortBy {
  popularityAsc = "popularity.asc",
  popularityDesc = "popularity.desc",
  revenueAsc = "revenue.asc",
  revenueDesc = "revenue.desc",
  releaseDateAsc = "primary_release_date.asc",
  releaseDateDesc = "primary_release_date.desc",
  voteAverageAsc = "vote_average.asc",
  voteAverageDesc = "vote_average.desc",
  voteCountAsc = "vote_count.asc",
  voteCountDesc = "vote_count.desc",
}

interface FilteringMoviesState {
  genres: number[];
  language: string;
  page: number;
  sorting: string;
}

interface FilteringMoviesAction {
  decreasePageNumber: () => void;
  increasePageNumber: () => void;
  resetAll: () => void;
  resetGenres: () => void;
  resetLanguage: () => void;
  setGenres: (genreId: number) => void;
  setLanguage: (language: string) => void;
  setSorting: (sorting: string) => void;
}

const resetPage = {
  page: 1,
};

const useFilteringMovies = create<FilteringMoviesState & FilteringMoviesAction>(
  (set) => ({
    ...resetPage,
    genres: [],
    language: "",
    sorting: SortBy.popularityDesc,

    decreasePageNumber: () => set((state) => ({ page: state.page - 1 })),
    increasePageNumber: () => set((state) => ({ page: state.page + 1 })),
    resetAll: () => set(() => ({ ...resetPage, genres: [], language: "" })),
    resetGenres: () => set(() => ({ ...resetPage, genres: [] })),
    resetLanguage: () => set(() => ({ language: "" })),
    setGenres: (genreId) =>
      set((state) => {
        const genresSelected = [...state.genres];

        if (genresSelected.includes(genreId)) {
          const ind = genresSelected.indexOf(genreId);
          genresSelected.splice(ind, 1);

          return { ...resetPage, genres: genresSelected };
        }

        genresSelected.push(genreId);

        return { ...resetPage, genres: genresSelected };
      }),
    setLanguage: (language) => set(() => ({ ...resetPage, language })),
    setSorting: (sorting) => set(() => ({ ...resetPage, sorting })),
  })
);

export default useFilteringMovies;
