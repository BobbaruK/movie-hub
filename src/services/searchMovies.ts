import APIClient from "./apiClient";
import { MoviesResponse } from "./moviesService";

export default new APIClient<MoviesResponse>("/search/movie");
