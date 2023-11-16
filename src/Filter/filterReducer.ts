export interface Filters {
  genres: number[];
  language: string;
  page: number;
  sorting: string;
}

interface FilterByGenre {
  type: "ByGenre";
  genreId: number;
}

interface FilterByLanguage {
  type: "ByLanguage";
  language: string;
}

interface Sorting {
  type: "Sorting";
  sorting: string;
}

interface ChangePage {
  type: "ChangePage";
  page: number;
}

export type FilterAction =
  | FilterByGenre
  | FilterByLanguage
  | Sorting
  | ChangePage;

const filterReducer = (filters: Filters, filterBy: FilterAction): Filters => {
  const { type } = filterBy;

  switch (type) {
    case "ByGenre":
      const genresSelected = [...filters.genres];

      if (genresSelected.includes(filterBy.genreId)) {
        const ind = genresSelected.indexOf(filterBy.genreId);
        genresSelected.splice(ind, 1);

        return { ...filters, genres: genresSelected };
      }

      if (filterBy.genreId === 0) {
        // 0 means no genre (reset)
        return { ...filters, genres: [] };
      }

      return { ...filters, genres: [...filters.genres, filterBy.genreId] };

    case "ByLanguage":
      return { ...filters, language: filterBy.language };

    case "Sorting":
      return { ...filters, sorting: filterBy.sorting };

    case "ChangePage":
      return { ...filters, page: filterBy.page };
  }
};

export default filterReducer;
