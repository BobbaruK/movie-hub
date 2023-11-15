import React from "react";
import { Configuration } from "../reducers/configReducer";

const ConfigsContext = React.createContext<Configuration>({} as Configuration);

export default ConfigsContext;
