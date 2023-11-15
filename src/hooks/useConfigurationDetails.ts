import { useQuery } from "@tanstack/react-query";
import configService from "../services/configService";
import { STALE_TIME } from "../constants";

const useConfigurationDetails = () =>
  useQuery({
    queryKey: ["config"],
    queryFn: configService.getAll,
    staleTime: STALE_TIME,
  });

export default useConfigurationDetails;
