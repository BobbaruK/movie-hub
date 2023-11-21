import React from "react";
import { useParams } from "react-router-dom";
import useConfig from "../hooks/api/useConfig";
import useMovie from "../hooks/api/useMovie";
import usePosterPath, { PosterSizes } from "../hooks/usePosterPath";
import ReleaseDateUI from "../utils/releaseDateUI";
import styles from "../assets/scss/movie/modules/MoviePage.module.scss";
import useLanguages from "../hooks/api/useLanguages";
import useKeywords from "../hooks/api/useKeywords";

const Movie = () => {
  const params = useParams();
  const movieId = Number(params.id);
  const { data: movie } = useMovie(movieId); // TODO: handle error
  const { data: config } = useConfig(); // TODO: handle error
  const posterPath = usePosterPath(config, movie?.poster_path);
  const backdropPath = usePosterPath(
    config,
    movie?.backdrop_path,
    PosterSizes.original
  );
  const { releaseDate, year } = ReleaseDateUI(movie);

  const { data: languages } = useLanguages(); // TODO: handle error

  const selectedLanguage = languages?.find(
    (lang) => lang.iso_639_1 === movie?.original_language
  );

  const { data: keywords } = useKeywords(movieId); // TODO: handle error

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
              <div className="keywords">
                <div className="h4">Keywords</div>
                <div className={[styles.keywordsWrapper].join(' ')}>
                  {keywords?.keywords.map((key) => (
                    <span key={key.id} className="badge text-bg-secondary">
                      {key.name}
                    </span>
                  ))}
                </div>
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
