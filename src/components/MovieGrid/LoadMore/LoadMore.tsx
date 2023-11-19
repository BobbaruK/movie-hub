import React from "react";
import useInfiniteMovies from "../../../hooks/useInfiniteMovies";
import useFilteringMovies from "../../../stores/filterStore";
import MovieCard from "../../MovieCard";
import styles from "../MoviesGrid.module.scss";

const LoadMore = () => {
  const { language, genres, sorting } = useFilteringMovies();
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteMovies({
    params: {
      with_original_language: language,
      with_genres: genres.join(","),
      sort_by: sorting,
    },
  });

  if (error) return <div className="alert alert-danger">{error.message}</div>;

  if (isLoading)
    return <div className="alert alert-info">Loading movies...</div>;

  if (data && data.pages[0].results.length === 0)
    return (
      <div className="alert alert-warning">No movies with these filters...</div>
    );

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
