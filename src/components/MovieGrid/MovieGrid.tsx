import React from "react";
import useMovieGridTitle from "../../hooks/useMovieGridTitle";
import LoadMore from "./LoadMore";
import WithPagination from "./WithPagination";

interface GridType {
  type: "pagination" | "loadMore" | "infinite";
}

const MovieGrid = () => {
  const gridType: GridType = {
    type: "loadMore",
  };

  const { activeGenres, activeLanguage } = useMovieGridTitle();

  return (
    <>
      <h3>
        {activeLanguage?.english_name} Movies{activeGenres.length > 0 && ": "}
        {activeGenres.length > 0 &&
          activeGenres.map((genre, index) => (
            <React.Fragment key={genre.id}>
              {index !== 0 && ", "}
              <span key={genre.id}>{genre.name}</span>
            </React.Fragment>
          ))}
      </h3>
      <div className="gridWrapper mb-5">
        {gridType.type === "pagination" && <WithPagination />}
        {gridType.type === "loadMore" && <LoadMore />}
      </div>
    </>
  );
};

export default MovieGrid;
