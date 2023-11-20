import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { STALE_TIME } from "../constants";
import movieServices from "../services/movieServices";

const useMovie = (id: number) =>
  useQuery({
    queryKey: ["movie", id],
    queryFn: () => movieServices.getMovie(id),
    staleTime: STALE_TIME,
    placeholderData: keepPreviousData,
  });

export default useMovie;
