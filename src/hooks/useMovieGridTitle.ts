
import { Genre } from "../services/genreService";
import { Language } from "../services/languageService";
import useFilteringMovies from "../stores/filterStore";
import useGenres from "./useGenres";
import useLanguages from "./useLanguages";

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

export default useMovieGridTitle;
