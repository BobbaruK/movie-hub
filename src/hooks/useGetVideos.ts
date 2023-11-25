import { VideosResponse } from "../services/videoService";

const useGetVideos = (videos: VideosResponse | undefined) => {
  if (videos === undefined) return {};

  const trailers = videos?.results.filter((video) => video.type === "Trailer");
  const teasers = videos?.results.filter((video) => video.type === "Teaser");
  const clips = videos?.results.filter((video) => video.type === "Clip");
  const bts = videos?.results.filter(
    (video) => video.type === "Behind the Scenes"
  );
  const bloopers = videos?.results.filter((video) => video.type === "Bloopers");
  const featurettes = videos?.results.filter(
    (video) => video.type === "Featurette"
  );

  return { trailers, teasers, clips, bts, bloopers, featurettes };
};

export default useGetVideos;
