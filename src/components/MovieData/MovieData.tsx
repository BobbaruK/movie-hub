import { Link, useParams } from "react-router-dom";
import useConfig from "../../hooks/api/useConfig";
import useMovie from "../../hooks/api/useMovie";
import PosterPath, { PosterSizes } from "../../utils/posterPath";
import ReleaseDateUI from "../../utils/releaseDateUI";
import styles from "./MovieData.module.scss";
import { FaArrowLeft } from "react-icons/fa";

const MovieData = () => {
  const params = useParams();
  const movieId = Number(params.id);

  const { data: movie, isLoading, error } = useMovie(movieId);
  const { year } = ReleaseDateUI(movie?.release_date);

  const { data: config } = useConfig();
  const posterPath = PosterPath(config, movie?.poster_path, PosterSizes.w92);

  if (error)
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <div className="alert alert-danger">{error.message}</div>
          </div>
        </div>
      </div>
    );

  if (isLoading)
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <div className="alert alert-info">Loading cast and crew...</div>
          </div>
        </div>
      </div>
    );

  return (
    <section className={[styles.movieData].join(" ")}>
      <div className="container">
        <div className="row">
          <div className={["col-12", styles.movieData__Inner].join(" ")}>
            <Link
              className={[styles.movieData__PosterLink].join(" ")}
              to=".."
              relative="path">
              <img src={posterPath} alt={movie?.title} />
            </Link>
            <h1 className={[styles.movieData__Title].join(" ")}>
              <Link to=".." relative="path">
                {movie?.title}
              </Link>{" "}
              ({year})
            </h1>
            <div className={[styles.movieData__goBack].join(" ")}>
              <Link to=".." relative="path">
                <FaArrowLeft />
                Back to main
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieData;
