import { useQuery } from "@tanstack/react-query";
import { STALE_TIME } from "../../constants";
import videoService from "../../services/videoService";

const useVideos = (id: number) =>
  useQuery({
    queryKey: ["videos", id],
    queryFn: () => videoService.getMovie(`/${id}/videos`),
    staleTime: STALE_TIME,
  });

export default useVideos;
