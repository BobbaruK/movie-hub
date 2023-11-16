import WithPagination from "./WithPagination";

export const enum gridType {
  pagination = "pagination",
  loadMore = "loadMore",
  infinite = "infinite",
}

const MovieGrid = () => {
  const grid = gridType.pagination;
  return (
    <>
      <h3>Movie Grid</h3>
      {grid === "pagination" && <WithPagination />}
    </>
  );
};

export default MovieGrid;
