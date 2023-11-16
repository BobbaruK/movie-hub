
import { Configuration } from "../Config/configReducer";
import APIClient from "../services/apiClient";

export default new APIClient<Configuration>("/configuration");
