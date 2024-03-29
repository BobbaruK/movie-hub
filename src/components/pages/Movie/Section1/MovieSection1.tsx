import React from "react";
import { useParams } from "react-router-dom";
import useConfig from "../../../../hooks/api/useConfig";
import useMovie from "../../../../hooks/api/useMovie";
import BackdropPath, { BackdropSizes } from "../../../../utils/backdropPath";
import PosterPath from "../../../../utils/posterPath";
import ReleaseDateUI from "../../../../utils/releaseDateUI";
import styles from "./MovieSection1.module.scss";

const MovieSection1 = () => {
  const params = useParams();
  const movieId = Number(params.id);

  const { data: movie } = useMovie(movieId);
  const { data: config } = useConfig();

  const posterPath = PosterPath(config, movie?.poster_path);
  const backdropPath = BackdropPath(
    config,
    movie?.backdrop_path,
    BackdropSizes.original
  );
  const { releaseDate, year } = ReleaseDateUI(movie?.release_date);

  return (
    <section
      className={[styles.hero].join(" ")}
      style={{ backgroundImage: `url(${backdropPath})` }}>
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="row">
          <div className="col-12 col-sm-6 col-lg-4 col-xxl-3">
            <img
              src={posterPath}
              className={["card-img-top", "rounded", styles.poster].join(" ")}
              alt={movie?.title}
            />
          </div>
          <div
            className={[
              "col-12",
              "col-sm-6",
              "col-lg-8",
              "col-xxl-9",
              styles.basicInfo,
            ].join(" ")}>
            <h1 className={[styles.title].join(" ")}>
              {movie?.title} ({year})
            </h1>
            <div className={[styles.facts].join(" ")}>
              <div className="release">{releaseDate}</div>
              &bull;
              <div className="genres">
                {movie?.genres.map((g, ind) => (
                  <React.Fragment key={g.id}>
                    <span>{g.name}</span>
                    {movie.genres.length === ind + 1 ? "" : ","}&nbsp;
                  </React.Fragment>
                ))}
              </div>
              &bull;
              <div className="runtime">{movie?.runtime} minutes</div>
            </div>
            <p className="lead">
              <em>{movie?.tagline}</em>
            </p>
            <p>{movie?.overview}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieSection1;
