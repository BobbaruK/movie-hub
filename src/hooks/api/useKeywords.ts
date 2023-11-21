import { useQuery } from "@tanstack/react-query";
import { STALE_TIME } from "../../constants";
import keywordsService from "../../services/keywordsService";

const useKeywords = (id: number) =>
  useQuery({
    queryKey: ["keywords", id],
    queryFn: () => keywordsService.getMovie(`/${id}/keywords`),
    staleTime: STALE_TIME,
  });

export default useKeywords;
