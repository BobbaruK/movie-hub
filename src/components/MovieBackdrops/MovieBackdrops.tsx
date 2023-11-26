import { Link } from "react-router-dom";
import { Configuration } from "../../services/configService";
import { Backdrop } from "../../services/imagesService";
import BackdropPath, { BackdropSizes } from "../../utils/backdropPath";
import styles from "./MovieBackdrops.module.scss";

interface Props {
  backdrop: Backdrop[] | undefined;
  error: Error | null;
  isLoading: boolean;
  config: Configuration | undefined;
}

const MovieBackdrops = ({ backdrop, error, isLoading, config }: Props) => {
  let output: Backdrop[] = [];

  if (backdrop && backdrop.length) {
    output = [...backdrop];
    output.length = 2;
  }

  if (error) return <div className="alert alert-danger">{error.message}</div>;

  if (isLoading)
    return <div className="alert alert-info">Loading Backdrops...</div>;

  return (
    <div className={["mb-5", styles.movieBackdrops].join(" ")}>
      <h3>Backdrops</h3>

      {output.length ? (
        <>
          <div className={[styles.movieTheBackdrops].join(" ")}>
            {output.map((backdrop) => (
              <div
                key={backdrop.file_path}
                className={[styles.movieBackdrop].join(" ")}>
                <img
                  src={BackdropPath(
                    config,
                    backdrop.file_path,
                    BackdropSizes.w780
                  )}
                  className={[
                    "rounded",
                    "card-img-top",
                    styles.movieBackdropImage,
                  ].join(" ")}
                  alt="Backdrop"
                  width={backdrop.width}
                  height={backdrop.height}
                />
              </div>
            ))}
          </div>
          <div className="mt-4">
            <Link to="backdrops">All Backdrops ({backdrop?.length})</Link>
          </div>
        </>
      ) : (
        <p>No backdrops for this movie.</p>
      )}
    </div>
  );
};

export default MovieBackdrops;
