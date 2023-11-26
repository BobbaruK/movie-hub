import { useParams } from "react-router-dom";
import useConfig from "../../../../../hooks/api/useConfig";
import useImages from "../../../../../hooks/api/useImages";
import PosterPath, { PosterSizes } from "../../../../../utils/posterPath";
import styles from "./Section1.module.scss";

const MoviePostersSection1 = () => {
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
            <div className="alert alert-info">Loading posters...</div>
          </div>
        </div>
      </div>
    );

  return (
    <section className={[styles.posters].join(" ")}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>Posters</h2>
            <div className={[styles.thePosters].join(" ")}>
              {imagesResponse?.posters.map((poster) => (
                <div key={poster.file_path} className={["poster"].join(" ")}>
                  <a
                    target="_blank"
                    href={PosterPath(
                      config,
                      poster.file_path,
                      PosterSizes.original
                    )}>
                    <img
                      src={PosterPath(
                        config,
                        poster.file_path,
                        PosterSizes.w342
                      )}
                      alt=""
                      className={[styles.posterImage].join("")}
                      width={poster.width}
                      height={poster.height}
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

export default MoviePostersSection1;
