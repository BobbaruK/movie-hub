import { useQuery } from "@tanstack/react-query";
import { STALE_TIME } from "../constants";
import configService from "../services/configService";

const useConfig = () =>
  useQuery({
    queryKey: ["config"],
    queryFn: configService.getAll,
    staleTime: STALE_TIME,
  });

export default useConfig;
