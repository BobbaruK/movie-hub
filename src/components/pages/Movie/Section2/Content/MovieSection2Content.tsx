import { useParams } from "react-router-dom";
import useCredits from "../../../../../hooks/api/useCredits";
import useVideos from "../../../../../hooks/api/useVideos";
import { MovieCast } from "../../../../MovieCast";
import { MovieVideos } from "../../../../MovieVideos";
import { Backdrops } from "./Backdrops";
import styles from "./MovieSection2Content.module.scss";
import { Posters } from "./Posters";
import { Recommendations } from "./Recommendations";

const MovieSection2Content = () => {
  const params = useParams();
  const movieId = Number(params.id);

  const {
    data: creditsResp,
    error: castError,
    isLoading: castIsLoading,
  } = useCredits(movieId);

  const {
    data: videosResp,
    error: videosError,
    isLoading: videosIsLoading,
  } = useVideos(movieId);

  return (
    <div
      className={["col-12", "col-lg-9 col-xxl-10", styles.contentWrapper].join(
        " "
      )}>
      <MovieCast
        cast={creditsResp?.cast}
        error={castError}
        isLoading={castIsLoading}
      />
      <hr />
      <h2>Media</h2>
      <MovieVideos
        videos={videosResp?.results}
        error={videosError}
        isLoading={videosIsLoading}
      />
      <Backdrops movieId={movieId} />
      <Posters movieId={movieId} />
      <hr />
      <Recommendations movieId={movieId} />
    </div>
  );
};

export default MovieSection2Content;
