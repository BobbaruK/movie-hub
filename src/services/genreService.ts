import APIClient from "./apiClient";

interface GenreResponse {
  genres: Genre[];
}

export interface Genre {
  id: number;
  name: string;
}

export default new APIClient<GenreResponse>("/genre/movie/list");
