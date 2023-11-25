import { Link } from "react-router-dom";
import useConfig from "../../hooks/api/useConfig";
import useGenres from "../../hooks/api/useGenres";
import { Movie } from "../../services/moviesService";
import useFilteringMovies from "../../stores/filterStore";
import PosterPath from "../../utils/posterPath";
import ReleaseDateUI from "../../utils/releaseDateUI";
import styles from "./MovieCard.module.scss";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  const { data } = useGenres();
  const filtered = data?.genres.filter((genre) =>
    movie.genre_ids.includes(genre.id)
  );
  const { genres } = useFilteringMovies();
  const { data: config } = useConfig();
  const posterPath = PosterPath(config, movie.poster_path);
  const { releaseDate } = ReleaseDateUI(movie.release_date);

  return (
    <div className={["card", styles.scssecoCard].join(" ")}>
      <img src={posterPath} className="card-img-top" alt={movie.title} />
      <span
        className={[
          "badge",
          `bg-${
            movie.vote_average > 7.5
              ? "success"
              : movie.vote_average > 6.0
              ? "warning"
              : "danger"
          }`,
        ].join(" ")}
        style={{
          position: "absolute",
          inset: "0.5rem 0.5rem auto auto",
          fontSize: "large",
          border: "1px solid black",
        }}>
        {movie.vote_average.toFixed()}
      </span>
      <div className={["card-body", styles.scssecoCardBody].join(" ")}>
        <h5
          className={["card-title", "mb-0", styles.scssecoCardTitle].join(" ")}
          title={movie.title}>
          <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
        </h5>
        <h6
          className={["card-title", styles.scssecoCardTitle].join(" ")}
          title={movie.original_title}>
          <small>{movie.original_title}</small>
        </h6>
        <p className="card-text">
          <small>{releaseDate}</small>
        </p>
        <p className="card-text">
          {movie.overview.substring(0, 200)}{" "}
          {movie.overview.length > 199 ? "[...]" : ""}
        </p>
        <div className={["card-text", styles.genres].join(" ")}>
          <ul className={[styles.genresList].join("")}>
            {filtered?.map((genre) => (
              <li
                className={[
                  "badge",
                  "border",
                  // "border-warning",
                  `bg-${genres.includes(genre.id) ? "success" : "secondary"}`,
                ].join(" ")}
                key={genre.id}>
                {genre.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
