import useFilters from "../../../hooks/useFilters";
import useMovies from "../../../hooks/useMovies";
import MovieCard from "../../MovieCard";
import Pagination from "./Pagination";
import styles from "../MoviesGrid.module.scss";

const WithPagination = () => {
  const { filters } = useFilters();

  const { data, error, isLoading } = useMovies({
    params: {
      page: filters.page,
      with_original_language: filters.language,
      with_genres: filters.genres.join(","),
      sort_by: filters.sorting,
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
