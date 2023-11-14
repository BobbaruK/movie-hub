import useMovies from "../../hooks/useMovies";
import MovieCard from "../MovieCard";
import styles from "./MoviesGrid.module.scss";

const MovieGrid = () => {
  const { data, error, isLoading } = useMovies();

  if (error) return <div className="alert alert-danger">{error.message}</div>;

  if (isLoading)
    return <div className="alert alert-info">Loading genres...</div>;

  return (
    <>
      <h3>Movie Grid</h3>
      <div className={[styles.cardsWrapper].join(" ")}>
        {data?.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default MovieGrid;
