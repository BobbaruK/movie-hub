import { useInfiniteQuery } from "@tanstack/react-query";
import { AxiosRequestConfig } from "axios";
import { STALE_TIME } from "../constants";
import movieService from "../services/movieService";

const useMovies = (config: AxiosRequestConfig) =>
  useInfiniteQuery({
    queryKey: ["movies", config.params],
    queryFn: ({ pageParam }) =>
      movieService.getAll({
        ...config,
        params: {
          ...config.params,
          page: pageParam,
        },
      }),
    staleTime: STALE_TIME,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      // console.log(lastPage, "lastPage");
      // console.log(allPages, "allPages");
      // console.log(lastPageParam, "lastPageParam");
      // console.log(allPageParams, "allPageParams");

      const lastPageNumber = lastPageParam as number;

      if (lastPage.total_pages <= allPages.length) return;

      return lastPageNumber + 1;
    },
  });

export default useMovies;
