import useFilters from "../../hooks/useFilters";
import ByGenre from "./ByGenre";
import ByLanguage from "./ByLanguage";
import styles from "./Filtering.module.scss";

const Filtering = () => {
  const { filters, filterBy } = useFilters();

  return (
    <>
      <h2 className={[styles.filterTitle].join(" ")}>
        Filtering
        {(filters.genres.length !== 0 || filters.language) && (
          <button
            className="btn btn-primary btn-sm"
            onClick={() => {
              filterBy({
                type: "ByGenre",
                genreId: 0, // 0 means no genre
              });
              filterBy({
                type: "ByLanguage",
                language: "",
              });
            }}>
            Reset
          </button>
        )}
      </h2>
      <ByGenre />
      <ByLanguage />
    </>
  );
};

export default Filtering;
