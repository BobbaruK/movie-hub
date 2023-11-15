import { Configuration } from "../reducers/configReducer";
import APIClient from "./apiClient";

export default new APIClient<Configuration>("/configuration");
