import React from "react";
import { useParams } from "react-router-dom";
import useConfig from "../hooks/api/useConfig";
import useMovie from "../hooks/api/useMovie";
import usePosterPath from "../utils/usePosterPath";

const MovieDetails = () => {
  const params = useParams();

  const { data: movie } = useMovie(Number(params.id));

  const { data: config } = useConfig();

  const posterPath = usePosterPath(config, movie?.poster_path);

  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-lg-4 col-xxl-3">
            <img src={posterPath} className="card-img-top" alt={movie?.title} />
          </div>
          <div className="col-12 col-sm-6 col-lg-8 col-xxl-9">
            <h2>title: {movie?.title}</h2>
            <p>release date: {movie?.release_date}</p>
            <p>tagline: {movie?.tagline}</p>
            <p>overview: {movie?.overview}</p>
            <p>
              genres:{" "}
              {movie?.genres.map((g) => (
                <React.Fragment key={g.id}>
                  <span>{g.name}</span>&nbsp;
                </React.Fragment>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
