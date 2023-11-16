import React from "react";
import useFilters from "../../../hooks/useFilters";
import useInfiniteMovies from "../../../hooks/useInfiniteMovies";
import MovieCard from "../../MovieCard";
import styles from "../MoviesGrid.module.scss";

const LoadMore = () => {
  const { filters } = useFilters();

  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteMovies({
    params: {
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
      <div className={[styles.cardsWrapper].join(" ")}>
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </React.Fragment>
        ))}
      </div>
      {hasNextPage && (
        <button
          onClick={() => fetchNextPage()}
          className={["btn", "btn-primary"].join(" ")}
          disabled={isFetchingNextPage}>
          {isFetchingNextPage ? "Loading..." : "Load more"}
        </button>
      )}
    </>
  );
};

export default LoadMore;
