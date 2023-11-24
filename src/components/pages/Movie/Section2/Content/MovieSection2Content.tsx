import { useParams } from "react-router-dom";
import useConfig from "../../../../../hooks/api/useConfig";
import useCredits from "../../../../../hooks/api/useCredits";
import useImages from "../../../../../hooks/api/useImages";
import useVideos from "../../../../../hooks/api/useVideos";
import { MovieBackdrops } from "../../../../MovieBackdrops";
import { MovieCast } from "../../../../MovieCast";
import { MovieVideos } from "../../../../MovieVideos";
import styles from "./MovieSection2Content.module.scss";
import { Posters } from "./Posters";
import { Recommendations } from "./Recommendations";

const MovieSection2Content = () => {
  const params = useParams();
  const movieId = Number(params.id);

  const { data: config } = useConfig();

  const {
    data: creditsResponse,
    error: castError,
    isLoading: castIsLoading,
  } = useCredits(movieId);

  const {
    data: videosResponse,
    error: videosError,
    isLoading: videosIsLoading,
  } = useVideos(movieId);

  const {
    data: imagesResponse,
    error: imagesError,
    isLoading: imagesIsLoading,
  } = useImages(movieId);

  return (
    <div
      className={["col-12", "col-lg-9 col-xxl-10", styles.contentWrapper].join(
        " "
      )}>
      <MovieCast
        cast={creditsResponse?.cast}
        error={castError}
        isLoading={castIsLoading}
      />
      <hr />
      <h2>Media</h2>
      <MovieVideos
        videos={videosResponse?.results}
        error={videosError}
        isLoading={videosIsLoading}
      />
      <MovieBackdrops
        backdrop={imagesResponse?.backdrops}
        error={imagesError}
        isLoading={imagesIsLoading}
        config={config}
      />
      <Posters movieId={movieId} />
      <hr />
      <Recommendations movieId={movieId} />
    </div>
  );
};

export default MovieSection2Content;
