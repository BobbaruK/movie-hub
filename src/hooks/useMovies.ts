import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { AxiosRequestConfig } from "axios";
import { STALE_TIME } from "../constants";
import movieService from "../services/moviesService";

const useMovies = (config: AxiosRequestConfig) =>
  useQuery({
    queryKey: ["movies", config.params],
    queryFn: () => movieService.getAll(config),
    staleTime: STALE_TIME,
    placeholderData: keepPreviousData,
  });

export default useMovies;
