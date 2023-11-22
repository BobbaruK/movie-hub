import { useQuery } from "@tanstack/react-query";
import { STALE_TIME } from "../../constants";
import movieRecommendations from "../../services/movieRecommendations";

const useMovieRecommendations = (id: number) =>
  useQuery({
    queryKey: ["recommendations", id],
    queryFn: () => movieRecommendations.getMovie(`/${id}/recommendations`),
    staleTime: STALE_TIME,
  });

export default useMovieRecommendations;
