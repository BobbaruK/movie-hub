import useLanguages from "../../../hooks/useLanguages";
import styles from "./ByLanguage.module.scss";

const ByLanguage = () => {
  const { data, error, isLoading } = useLanguages();

  if (error) return <div className="alert alert-danger">{error.message}</div>;

  if (isLoading)
    return <div className="alert alert-info">Loading languages...</div>;

  return (
    <>
      <div className={["h5", "mt-3", styles.filterLanguageTitle].join(" ")}>
        Language
      </div>
      <select
        className="form-select"
        onChange={(e) => console.log(e.target.value)}
        // value={appQuery.filterQuery.language}
      >
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
