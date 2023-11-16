import React from "react";
import { Configuration } from "./configReducer";

const ConfigContext = React.createContext<Configuration>({} as Configuration);

export default ConfigContext;
