
import useFilteringMovies from "../../stores/filterStore";
import ByGenre from "./ByGenre";
import ByLanguage from "./ByLanguage";
// import styles from "./Filtering.module.scss";

const Filtering = () => {
  const { genres, language, resetAll } = useFilteringMovies();

  return (
    <>
      <div className={["h3", "sidebar__title"].join(" ")}>
        Filtering
        {(genres.length !== 0 || language) && (
          <button className="btn btn-primary btn-sm" onClick={() => resetAll()}>
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
