export interface Configuration {
  images: ImagesConfig;
  change_keys: string[];
}

interface ImagesConfig {
  base_url: string;
  secure_base_url: string;
  backdrop_sizes: string[];
  logo_sizes: string[];
  poster_sizes: string[];
  profile_sizes: string[];
  still_sizes: string[];
}

const configReducer = (config: Configuration) => {
  return config;
};

export default configReducer;
