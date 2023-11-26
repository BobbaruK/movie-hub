import { useParams } from "react-router-dom";
import useImages from "../../../../../hooks/api/useImages";
import styles from "./Section1.module.scss";
import useConfig from "../../../../../hooks/api/useConfig";
import BackdropPath, { BackdropSizes } from "../../../../../utils/backdropPath";

const MovieBackdropsSection1 = () => {
  const params = useParams();
  const movieId = Number(params.id);

  const { data: config } = useConfig();

  const {
    data: imagesResponse,
    error: imagesError,
    isLoading: imagesIsLoading,
  } = useImages(movieId);

  if (imagesError)
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <div className="alert alert-danger">{imagesError.message}</div>
          </div>
        </div>
      </div>
    );

  if (imagesIsLoading)
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <div className="alert alert-info">Loading backdrops...</div>
          </div>
        </div>
      </div>
    );

  return (
    <section className={[styles.backdrops].join(" ")}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>Backdrops</h2>
            <div className={[styles.theBackdrops].join(" ")}>
              {imagesResponse?.backdrops.map((backdrop) => (
                <div
                  key={backdrop.file_path}
                  className={["backdrop"].join(" ")}>
                  <a
                    target="_blank"
                    href={BackdropPath(
                      config,
                      backdrop.file_path,
                      BackdropSizes.original
                    )}>
                    <img
                      src={BackdropPath(
                        config,
                        backdrop.file_path,
                        BackdropSizes.w300
                      )}
                      alt=""
                      className={[styles.backdropImage].join("")}
                      width={backdrop.width}
                      height={backdrop.height}
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieBackdropsSection1;
