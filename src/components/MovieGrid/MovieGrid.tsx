import MovieCard from "../MovieCard";
import styles from "./MoviesGrid.module.scss";

const MovieGrid = () => {
  return (
    <>
      <h3>Movie Grid</h3>
      <div className={[styles.cardsWrapper].join(" ")}>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <p>right</p>
        <p>here</p>
        <p>he</p>
        <p>he</p>
      </div>
    </>
  );
};

export default MovieGrid;
