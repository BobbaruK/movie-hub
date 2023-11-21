import React from "react";
import { useParams } from "react-router-dom";
import useConfig from "../hooks/api/useConfig";
import useMovie from "../hooks/api/useMovie";
import usePosterPath, { PosterSizes } from "../hooks/usePosterPath";
import ReleaseDateUI from "../utils/releaseDateUI";
import styles from "../assets/scss/movie/modules/MoviePage.module.scss";
import useLanguages from "../hooks/api/useLanguages";

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

  const { data: languages } = useLanguages();

  console.log(languages);

  const selectedLanguage = languages?.find(
    (lang) => lang.iso_639_1 === movie?.original_language
  );

  return (
    <>
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
      <section className={[styles.details].join(" ")}>
        <div className="container">
          <div className="row">
            <div className={["col-12", "col-lg-3", styles.sidebar].join(" ")}>
              <div className="status">
                <div className="h4">Status</div>
                {movie?.status}
              </div>
              <div className="originalLanguage">
                <div className="h4">Original Language</div>
                {selectedLanguage?.english_name}
              </div>
              <div className="budget">
                <div className="h4">Budget</div>$
                {movie?.budget.toLocaleString()}
              </div>
              <div className="revenue">
                <div className="h4">Revenue</div>$
                {movie?.revenue.toLocaleString()}
              </div>
            </div>
            <div className="col-12 col-lg-9">content</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Movie;
