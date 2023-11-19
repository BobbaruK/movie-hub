import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useInfiniteMovies from "../../../hooks/useInfiniteMovies";
import useFilteringMovies from "../../../stores/filterStore";
import MovieCard from "../../MovieCard";
import styles from "../MoviesGrid.module.scss";

const Infinite = () => {
  const { language, genres, sorting } = useFilteringMovies();

  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    // isFetchingNextPage,
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

  return (
    <>
      {data && (
        <InfiniteScroll
          dataLength={data.pageParams.length} //This is important field to render the next data
          next={fetchNextPage}
          hasMore={hasNextPage}
          loader={<div className="alert alert-info">Loading...</div>}
          endMessage={
            <div className="alert alert-warning">No more movies to load</div>
          }>
          <div className={[styles.cardsWrapper].join(" ")}>
            {data.pages.map((page, index) => (
              <React.Fragment key={index}>
                {page.results.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </React.Fragment>
            ))}
          </div>
        </InfiniteScroll>
      )}
    </>
  );
};

export default Infinite;
