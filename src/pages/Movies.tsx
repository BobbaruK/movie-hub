import Filtering from "../components/Filtering";
import MovieGrid from "../components/MovieGrid";
import { Sorting } from "../components/Sorting";

const Movies = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-5 col-lg-4 col-xl-3 col-xxl-2 sidebar">
          <Sorting />
          <Filtering />
        </div>
        <div className="col-12 col-sm-6 col-md-7 col-lg-8 col-xl-9 col-xxl-10">
          <MovieGrid />
        </div>
      </div>
    </div>
  );
};

export default Movies;
