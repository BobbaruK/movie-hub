import ByGenre from "./ByGenre";
import ByLanguage from "./ByLanguage";
import styles from "./Filtering.module.scss";

const Filtering = () => {
  return (
    <>
      <h2 className={[styles.filterTitle].join(" ")}>Filtering</h2>
      <ByGenre />
      <ByLanguage />
    </>
  );
};

export default Filtering;
