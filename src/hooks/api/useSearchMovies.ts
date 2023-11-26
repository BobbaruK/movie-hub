import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { STALE_TIME } from "../../constants";
import searchMovies from "../../services/searchMovies";

const useSearchMovies = (searchQuery: string) =>
  useQuery({
    queryKey: ["searcedMovies", searchQuery],
    queryFn: () => searchMovies.searchMovie(searchQuery),
    staleTime: STALE_TIME,
    placeholderData: keepPreviousData,
  });

export default useSearchMovies;
