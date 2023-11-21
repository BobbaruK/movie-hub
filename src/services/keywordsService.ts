import APIClient from "./apiClient";

interface KeywordsResponse {
  id: number;
  keywords: Keywords[];
}

export interface Keywords {
  id: number;
  name: string;
}

export default new APIClient<KeywordsResponse>("/movie");
