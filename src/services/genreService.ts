import APIClient from "./apiClient";

interface GenreResponse {
  genres: Genre[];
}

interface Genre {
  id: number;
  name: string;
}

export default new APIClient<GenreResponse>("/genre/movie/list");
