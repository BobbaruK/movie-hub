import { useParams } from "react-router-dom";
import useCredits from "../../../../../hooks/api/useCredits";
import { MovieCast } from "../../../../MovieCast";
import { Backdrops } from "./Backdrops";
import styles from "./MovieSection2Content.module.scss";
import { Posters } from "./Posters";
import { Recommendations } from "./Recommendations";
import { Video } from "./Video";

const MovieSection2Content = () => {
  const params = useParams();
  const movieId = Number(params.id);

  const {
    data,
    error: castError,
    isLoading: castIsLoading,
  } = useCredits(movieId);

  return (
    <div
      className={["col-12", "col-lg-9 col-xxl-10", styles.contentWrapper].join(
        " "
      )}>
      <MovieCast
        cast={data?.cast}
        error={castError}
        isLoading={castIsLoading}
      />
      <hr />
      <h2>Media</h2>
      <Video movieId={movieId} />
      <Backdrops movieId={movieId} />
      <Posters movieId={movieId} />
      <hr />
      <Recommendations movieId={movieId} />
    </div>
  );
};

export default MovieSection2Content;
