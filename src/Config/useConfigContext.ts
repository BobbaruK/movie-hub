import { useContext } from "react";
import ConfigContext from "./configContext";

const useConfigContext = () => useContext(ConfigContext);

export default useConfigContext;
