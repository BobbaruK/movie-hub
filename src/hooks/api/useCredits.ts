import { useQuery } from "@tanstack/react-query";
import { STALE_TIME } from "../../constants";
import creditsService from "../../services/creditsService";

const useCredits = (id: number) =>
  useQuery({
    queryKey: ["credits", id],
    queryFn: () => creditsService.getMovie(`/${id}/credits`),
    staleTime: STALE_TIME,
  });

export default useCredits;
