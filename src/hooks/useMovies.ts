import { useQuery } from "@tanstack/react-query";
import { STALE_TIME } from "../constants";
import movieService from "../services/movieService";

const useMovies = () =>
  useQuery({
    queryKey: ["movies"],
    queryFn: movieService.getAll,
    staleTime: STALE_TIME,
  });

export default useMovies;
