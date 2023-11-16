
import useFilterContext from "../Filter/useFilterContext";
import { Genre } from "../services/genreService";
import { Language } from "../services/languageService";
import useGenres from "./useGenres";
import useLanguages from "./useLanguages";

const useMovieGridTitle = () => {
  const { filters } = useFilterContext();
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

  return { activeLanguage, activeGenres };
};

export default useMovieGridTitle;
