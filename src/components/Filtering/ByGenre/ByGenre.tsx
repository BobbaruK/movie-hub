import styles from "./ByGenre.module.scss";

const ByGenre = () => {
  return (
    <>
      <h3 className={[styles.filterGenreTitle].join(" ")}>ByGenre</h3>
    </>
  );
};

export default ByGenre;
