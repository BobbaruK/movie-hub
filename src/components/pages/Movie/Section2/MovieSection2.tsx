import { MovieSection2Content } from "./Content";
import styles from "./MovieSection2.module.scss";
import MovieSection2Sidebar from "./Sidebar/MovieSection2Sidebar";

const MovieSection2 = () => {
  
  return (
    <section className={[styles.details].join(" ")}>
      <div className="container">
        <div className="row">
          <MovieSection2Content/>
          <MovieSection2Sidebar />
        </div>
      </div>
    </section>
  );
};

export default MovieSection2;
