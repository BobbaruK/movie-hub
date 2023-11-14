import useGenres from "../../hooks/useGenres";
import { Movie } from "../../services/movieService";
import styles from "./MovieCard.module.scss";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  const release_date = new Date(movie.release_date);
  const month = release_date.getMonth();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const releaseDateUI = `${
    monthNames[month]
  } ${release_date.getDay()}, ${release_date.getFullYear()}`;

  const { data, error, isLoading } = useGenres();

  const filtered = data?.genres.filter((genre) =>
    movie.genre_ids.includes(genre.id)
  );

  return (
    <div className={["card", styles.scssecoCard].join(" ")}>
      <img
        src={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`}
        className="card-img-top"
        alt={movie.title}
      />
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
          {movie.title}
        </h5>
        <h6
          className={["card-title", styles.scssecoCardTitle].join(" ")}
          title={movie.original_title}>
          <small>{movie.original_title}</small>
        </h6>
        <p className="card-text">
          <small>{releaseDateUI}</small>
        </p>
        <p className="card-text">
          {movie.overview.substring(0, 200)}{" "}
          {movie.overview.length > 199 ? "[...]" : ""}
        </p>
        <div className={["card-text", styles.genres].join(" ")}>
          {/* {error && <div className="alert alert-danger">{error.message}</div>}
          {isLoading && (
            <div className="alert alert-info">Loading genres...</div>
          )} */}
          <ul className={[styles.genresList].join("")}>
            {filtered?.map((genre) => (
              <li
                className={[
                  "badge",
                  "border",
                  // "border-warning",
                  "bg-secondary",
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
