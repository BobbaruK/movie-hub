import { useQuery } from "@tanstack/react-query";
import { STALE_TIME } from "../constants";
import configService from "./configService";

const useConfigResponse = () =>
  useQuery({
    queryKey: ["config"],
    queryFn: configService.getAll,
    staleTime: STALE_TIME,
  });

export default useConfigResponse;
