import { useParams } from "react-router-dom";
import { MovieSection1 } from "../components/pages/Movie/Section1";
import { MovieSection2 } from "../components/pages/Movie/Section2";
import useMovie from "../hooks/api/useMovie";

const Movie = () => {
  const params = useParams();
  const movieId = Number(params.id);
  const { isLoading, error } = useMovie(movieId);

  if (error)
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <div className="alert alert-danger">{error.message}</div>
          </div>
        </div>
      </div>
    );

  if (isLoading)
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <div className="alert alert-info">Loading movie...</div>
          </div>
        </div>
      </div>
    );
    
  return (
    <>
      <MovieSection1 />
      <MovieSection2 />
    </>
  );
};

export default Movie;
