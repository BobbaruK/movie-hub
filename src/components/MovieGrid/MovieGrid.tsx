import LoadMore from "./LoadMore";
import WithPagination from "./WithPagination";

interface GridType {
  type: "pagination" | "loadMore" | "infinite";
}

const MovieGrid = () => {
  const gridType: GridType = {
    type: "loadMore",
  };

  return (
    <>
      <h3>Movie Grid</h3>
      <div className="gridWrapper mb-5">
        {gridType.type === "pagination" && <WithPagination />}
        {gridType.type === "loadMore" && <LoadMore />}
      </div>
    </>
  );
};

export default MovieGrid;
