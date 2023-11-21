import React from "react";
import useGenres from "../../../hooks/api/useGenres";
import useLanguages from "../../../hooks/api/useLanguages";
import { Genre } from "../../../services/genreService";
import { Language } from "../../../services/languageService";
import useFilteringMovies from "../../../stores/filterStore";

const useMovieGridTitle = () => {
  const { genres, language } = useFilteringMovies();
  const { data: languages } = useLanguages();
  const { data: genreResp } = useGenres();

  const activeLanguage: Language | undefined = languages?.find(
    (lang) => lang.iso_639_1 === language
  );

  const activeGenres: Genre[] = [];
  genres.forEach((genre) => {
    const activeGenre = genreResp?.genres.find((g) => g.id === genre);
    if (activeGenre) activeGenres.push(activeGenre);
  });

  return { activeLanguage, activeGenres };
};

const Title = () => {
  const { activeGenres, activeLanguage } = useMovieGridTitle();

  return (
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
  );
};

export default Title;
