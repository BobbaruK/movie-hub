import React from "react";
import useFilters from "../../hooks/useFilters";
import useGenres from "../../hooks/useGenres";
import useLanguages from "../../hooks/useLanguages";
import { Genre } from "../../services/genreService";
import { Language } from "../../services/languageService";
import LoadMore from "./LoadMore";
import WithPagination from "./WithPagination";

interface GridType {
  type: "pagination" | "loadMore" | "infinite";
}

const MovieGrid = () => {
  const { filters } = useFilters();
  const { data: languages } = useLanguages();
  const { data: genres } = useGenres();

  const activeLanguage: Language | undefined = languages?.find(
    (lang) => lang.iso_639_1 === filters.language
  );

  const activeGenres: Genre[] = [];
  filters.genres.forEach((genre) => {
    const activeGenre = genres?.genres.find((g) => g.id === genre);
    if (activeGenre) activeGenres.push(activeGenre);
  });

  const gridType: GridType = {
    type: "loadMore",
  };

  return (
    <>
      <h3>
        {activeLanguage?.english_name} Movies{activeGenres.length > 0 && ": "}
        {activeGenres.length > 0 &&
          activeGenres.map((genre, index) => (
            <React.Fragment key={genre.id}>
              {index !== 0 && ", "}
              <span key={genre.id}>{genre.name}</span>
            </React.Fragment>
          ))}
      </h3>
      <div className="gridWrapper mb-5">
        {gridType.type === "pagination" && <WithPagination />}
        {gridType.type === "loadMore" && <LoadMore />}
      </div>
    </>
  );
};

export default MovieGrid;
