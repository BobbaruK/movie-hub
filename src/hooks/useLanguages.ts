import { useQuery } from "@tanstack/react-query";
import { STALE_TIME } from "../constants";
import languageService from "../services/languageService";

const useLanguages = () =>
  useQuery({
    queryKey: ["languages"],
    queryFn: languageService.getAll,
    staleTime: STALE_TIME,
  });

export default useLanguages;
