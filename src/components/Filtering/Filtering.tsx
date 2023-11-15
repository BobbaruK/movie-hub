import useFilters from "../../hooks/useFilters";
import ByGenre from "./ByGenre";
import ByLanguage from "./ByLanguage";
// import styles from "./Filtering.module.scss";

const Filtering = () => {
  const { filters, filterBy } = useFilters();

  return (
    <>
      <div className={["h3", "sidebar__title"].join(" ")}>
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
      </div>
      <ByGenre />
      <ByLanguage />
    </>
  );
};

export default Filtering;
