import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "3af2480834b678e3323531f1a6354d94",
  },
});

class APIClient<T> {
  private endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config?: AxiosRequestConfig) => {
    return axiosInstance.get<T>(this.endpoint, config).then((res) => res.data);
  };

  getMovie = (id: number) => {
    return axiosInstance.get<T>(this.endpoint + id).then((res) => res.data);
  };

  // TODO: try and make this reusable... study the api
  getKeyworkds = (id: number) => {
    return axiosInstance
      .get<T>(this.endpoint + "/" + id + "/keywords")
      .then((res) => res.data);
  };
}

export default APIClient;
