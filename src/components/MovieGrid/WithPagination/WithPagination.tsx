
import useMovies from "../../../hooks/useMovies";
import useFilteringMovies from "../../../stores/filterStore";
import MovieCard from "../../MovieCard";
import styles from "../MoviesGrid.module.scss";
import Pagination from "./Pagination";

const WithPagination = () => {
  const { genres, language, page, sorting } = useFilteringMovies();

  const { data, error, isLoading } = useMovies({
    params: {
      page: page,
      with_original_language: language,
      with_genres: genres.join(","),
      sort_by: sorting,
    },
  });

  if (error) return <div className="alert alert-danger">{error.message}</div>;

  if (isLoading)
    return <div className="alert alert-info">Loading movies...</div>;

  return (
    <>
      <Pagination />
      <div className={[styles.cardsWrapper].join(" ")}>
        {data?.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <Pagination />
    </>
  );
};

export default WithPagination;
