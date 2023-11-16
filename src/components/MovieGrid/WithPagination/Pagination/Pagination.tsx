
import useFilterContext from "../../../../Filter/useFilterContext";
import useMovies from "../../../../hooks/useMovies";
import styles from "./Pagination.module.scss";

const Pagination = () => {
  const { filters, filterBy } = useFilterContext();
  const { data } = useMovies({
    params: {
      page: filters.page,
      with_original_language: filters.language,
      with_genres: filters.genres.join(","),
      sort_by: filters.sorting,
    },
  });

  return (
    <div className={[styles.pagination].join(" ")}>
      <button
        className="btn btn-primary"
        disabled={filters.page === 1}
        onClick={() => {
          filterBy({
            type: "ChangePage",
            page: filters.page - 1,
          });
        }}>
        Prev
      </button>
      <div>
        Page {data?.page} of {data?.total_pages}
      </div>
      <button
        className="btn btn-primary"
        disabled={filters.page === data?.total_pages}
        onClick={() => {
          filterBy({
            type: "ChangePage",
            page: filters.page + 1,
          });
        }}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
