import LoadMore from "./LoadMore";
import Title from "./Title";
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
      <Title />

      <div className="gridWrapper mb-5">
        {gridType.type === "pagination" && <WithPagination />}
        {gridType.type === "loadMore" && <LoadMore />}
      </div>
    </>
  );
};

export default MovieGrid;
