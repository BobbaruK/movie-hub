import { Configuration } from "../services/configService";

export const enum BackdropSizes {
  "w300" = 0,
  "w780",
  "w1280",
  "original",
}

const BackdropPath = (
  config: Configuration | null | undefined,
  posterPath: string | null | undefined,
  size: BackdropSizes = BackdropSizes.original
) => {
  if (posterPath === null)
    return "https://placehold.co/500x750?text=Backdrop+Missing";

  if (config)
    return (
      config?.images.secure_base_url +
      config?.images.backdrop_sizes[size] +
      posterPath
    );

  return "https://placehold.co/500x750?text=Config+Error";
};

export default BackdropPath;
