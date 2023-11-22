import { useParams } from "react-router-dom";
import { Backdrops } from "./Backdrops";
import { Cast } from "./Cast";
import styles from "./MovieSection2Content.module.scss";
import { Posters } from "./Posters";
import { Video } from "./Video";
import { Recommendations } from "./Recommendations";

const MovieSection2Content = () => {
  const params = useParams();
  const movieId = Number(params.id);

  return (
    <div
      className={["col-12", "col-lg-9 col-xxl-10", styles.contentWrapper].join(
        " "
      )}>
      <Cast movieId={movieId} />
      <hr />
      <h2>Media</h2>
      <Video movieId={movieId} />
      <Backdrops movieId={movieId} />
      <Posters movieId={movieId} />
      <hr />
      <Recommendations movieId={movieId} />
      {/*
        // TODO: Recommendations 
      */}
    </div>
  );
};

export default MovieSection2Content;
