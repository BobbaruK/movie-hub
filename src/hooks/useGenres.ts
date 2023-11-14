import { useQuery } from "@tanstack/react-query";
import { STALE_TIME } from "../constants";
import genreService from "../services/genreService";

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: genreService.getAll,
    staleTime: STALE_TIME,
  });

export default useGenres;
