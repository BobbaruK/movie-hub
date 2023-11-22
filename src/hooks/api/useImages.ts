import { useQuery } from "@tanstack/react-query";
import { STALE_TIME } from "../../constants";
import imagesService from "../../services/imagesService";

const useImages = (id: number) =>
  useQuery({
    queryKey: ["images", id],
    queryFn: () => imagesService.getMovie(`/${id}/images`),
    staleTime: STALE_TIME,
  });

export default useImages;
