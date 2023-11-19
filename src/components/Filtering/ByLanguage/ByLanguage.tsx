import useLanguages from "../../../hooks/useLanguages";
import useFilteringMovies from "../../../stores/filterStore";
// import styles from "./ByLanguage.module.scss";

const ByLanguage = () => {
  const { data, error, isLoading } = useLanguages();
  const { language, setLanguage } = useFilteringMovies();

  if (error) return <div className="alert alert-danger">{error.message}</div>;

  if (isLoading)
    return <div className="alert alert-info">Loading languages...</div>;

  return (
    <>
      <div className={["h5", "mt-3", "sidebar__subtitle"].join(" ")}>
        Language
        {language && (
          <button
            className="btn btn-primary btn-sm"
            onClick={() => {
              setLanguage("");
            }}>
            Reset
          </button>
        )}
      </div>
      <select
        className="form-select"
        onChange={(e) => setLanguage(e.target.value)}
        value={language}>
        <option value="">All</option>
        {data?.map((language) => (
          <option key={language.iso_639_1} value={language.iso_639_1}>
            {language.english_name}
          </option>
        ))}
      </select>
    </>
  );
};

export default ByLanguage;
