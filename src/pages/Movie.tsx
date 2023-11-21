import React from "react";
import { useParams } from "react-router-dom";
import useConfig from "../hooks/api/useConfig";
import useMovie from "../hooks/api/useMovie";
import usePosterPath, { PosterSizes } from "../hooks/usePosterPath";
import ReleaseDateUI from "../utils/releaseDateUI";
import styles from "../assets/scss/modules/MoviePage.module.scss";

const Movie = () => {
  const params = useParams();
  const { data: movie } = useMovie(Number(params.id));
  const { data: config } = useConfig();
  const posterPath = usePosterPath(config, movie?.poster_path);
  const backdropPath = usePosterPath(
    config,
    movie?.backdrop_path,
    PosterSizes.original
  );
  const { releaseDate, year } = ReleaseDateUI(movie);

  return (
    <section
      className={[styles.hero].join(" ")}
      style={{ backgroundImage: `url(${backdropPath})` }}>
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="row">
          <div className="col-12 col-sm-6 col-lg-4 col-xxl-3">
            <img
              src={posterPath}
              className={["card-img-top", styles.poster].join(" ")}
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
            <p className="lead">{movie?.tagline}</p>
            <p>{movie?.overview}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Movie;
