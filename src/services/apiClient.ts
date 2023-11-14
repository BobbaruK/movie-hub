import axios from "axios";

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

  getAll = () => {
    return axiosInstance
      .get<T>(this.endpoint, {
        params: {},
      })
      .then((res) => res.data);
  };
}

export default APIClient;
