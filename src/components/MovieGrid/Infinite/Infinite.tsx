import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useFilteringMovies from "../../../stores/filterStore";
import MovieCard from "../../MovieCard";
import styles from "../MoviesGrid.module.scss";
import useInfiniteMovies from "../../../hooks/api/useInfiniteMovies";

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

  if (data && data.pages[0].results.length === 0)
    return (
      <div className="alert alert-warning">No movies with these filters...</div>
    );

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
