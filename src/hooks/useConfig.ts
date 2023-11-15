import { useContext } from "react";
import ConfigsContext from "../contexts/configContext";

const useConfig = () => useContext(ConfigsContext);

export default useConfig;
