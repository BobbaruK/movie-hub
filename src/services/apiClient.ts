import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "3af2480834b678e3323531f1a6354d94",
  },
});

interface MoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Language {
  iso_639_1: string;
  english_name: string;
  name: string;
}

class APIClient<T> {
  private endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = () => {
    return axiosInstance
      .get<T>(this.endpoint, {
        params: {},
      })
      .then((res) => res.data);
  };
}

export default APIClient;
