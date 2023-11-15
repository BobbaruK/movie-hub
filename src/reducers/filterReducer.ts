export interface Filters {
  genres: number[];
  language: string;
}

interface FilterByGenre {
  type: "ByGenre";
  genreId: number;
}

interface FilterByLanguage {
  type: "ByLanguage";
  language: string;
}

type FilterAction = FilterByGenre | FilterByLanguage;

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

      return { ...filters, genres: [...filters.genres, filterBy.genreId] };

    case "ByLanguage":
      return { ...filters, language: filterBy.language };
  }
};

export default filterReducer;
