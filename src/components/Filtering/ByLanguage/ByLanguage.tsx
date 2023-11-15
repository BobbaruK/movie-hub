import useFilters from "../../../hooks/useFilters";
import useLanguages from "../../../hooks/useLanguages";
import styles from "./ByLanguage.module.scss";

const ByLanguage = () => {
  const { filters, filterBy } = useFilters();
  const { data, error, isLoading } = useLanguages();

  if (error) return <div className="alert alert-danger">{error.message}</div>;

  if (isLoading)
    return <div className="alert alert-info">Loading languages...</div>;

  return (
    <>
      <div className={["h5", "mt-3", styles.filterLanguageTitle].join(" ")}>
        Language
        {filters.language && (
          <button
            className="btn btn-primary btn-sm"
            onClick={() =>
              filterBy({
                type: "ByLanguage",
                language: "",
              })
            }>
            Reset
          </button>
        )}
      </div>
      <select
        className="form-select"
        onChange={(e) =>
          filterBy({
            type: "ByLanguage",
            language: e.target.value,
          })
        }
        value={filters.language}>
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
