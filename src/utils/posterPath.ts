import { Configuration } from "../services/configService";

export const enum PosterSizes {
  "w92" = 0,
  "w154",
  "w185",
  "w342",
  "w500",
  "w780",
  "original",
}

// TODO: aici nu e bine decat pt poster_sizes

const PosterPath = (
  config: Configuration | null | undefined,
  posterPath: string | null | undefined,
  size: PosterSizes = PosterSizes.w500
) => {
  if (posterPath === null)
    return "https://placehold.co/500x750?text=Poster+Missing";

  if (config)
    return (
      config?.images.secure_base_url +
      config?.images.poster_sizes[size] +
      posterPath
    );

  return "https://placehold.co/500x750?text=Config+Error";
};

export default PosterPath;