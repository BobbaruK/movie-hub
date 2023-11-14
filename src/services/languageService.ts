import APIClient from "./apiClient";

export interface Language {
  iso_639_1: string;
  english_name: string;
  name: string;
}

export default new APIClient<Language[]>("/configuration/languages");
