import { Link } from "react-router-dom";
import { Configuration } from "../../services/configService";
import { Poster } from "../../services/imagesService";
import PosterPath, { PosterSizes } from "../../utils/posterPath";
import styles from "./MoviePosters.module.scss";

interface Props {
  posters: Poster[] | undefined;
  error: Error | null;
  isLoading: boolean;
  config: Configuration | undefined;
}

const MoviePosters = ({ posters, error, isLoading, config }: Props) => {
  let output: Poster[] = [];

  if (posters && posters.length) {
    output = [...posters];
    output.length = 4;
  }

  if (error) return <div className="alert alert-danger">{error.message}</div>;

  if (isLoading)
    return <div className="alert alert-info">Loading Posters...</div>;

  return (
    <div className={["mb-5", styles.moviePosters].join(" ")}>
      <h3>Posters</h3>
      {output.length ? (
        <>
          <div className={[styles.movieThePosters].join(" ")}>
            {output.map((poster) => (
              <div
                key={poster.file_path}
                className={[styles.moviePoster].join(" ")}>
                <img
                  src={PosterPath(config, poster.file_path, PosterSizes.w342)}
                  className={[
                    "rounded",
                    "card-img-top",
                    styles.moviePosterImage,
                  ].join(" ")}
                  alt="Backdrop"
                  width={poster.width}
                  height={poster.height}
                />
              </div>
            ))}
          </div>
          <div className="mt-4">
            <Link to="posters">All Posters ({posters?.length})</Link>
          </div>
        </>
      ) : (
        <p>No posters for this movie.</p>
      )}
    </div>
  );
};

export default MoviePosters;
