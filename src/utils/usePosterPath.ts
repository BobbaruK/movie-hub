import { Configuration } from "../services/configService";

const usePosterPath = (
  config: Configuration | null | undefined,
  posterPath: string | null | undefined
) => {
  if (posterPath === null)
    return "https://placehold.co/500x750?text=Poster+Missing";

  if (config)
    return (
      config?.images.secure_base_url +
      config?.images.poster_sizes[4] +
      posterPath
    );

  return "https://placehold.co/500x750?text=Config+Error";
};

export default usePosterPath;
