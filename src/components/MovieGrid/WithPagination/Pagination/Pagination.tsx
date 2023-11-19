
import useMovies from "../../../../hooks/useMovies";
import useFilteringMovies from "../../../../stores/filterStore";
import styles from "./Pagination.module.scss";

const Pagination = () => {
  const {
    page,
    increasePageNumber,
    decreasePageNumber,
    language,
    genres,
    sorting,
  } = useFilteringMovies();
  
  const { data } = useMovies({
    params: {
      page: page,
      with_original_language: language,
      with_genres: genres.join(","),
      sort_by: sorting,
    },
  });

  return (
    <div className={[styles.pagination].join(" ")}>
      <button
        className="btn btn-primary"
        disabled={page === 1}
        onClick={() => decreasePageNumber()}>
        Prev
      </button>
      <div>
        Page {data?.page} of {data?.total_pages}
      </div>
      <button
        className="btn btn-primary"
        disabled={page === data?.total_pages}
        onClick={() => increasePageNumber()}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
