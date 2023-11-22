import { Link } from "react-router-dom";
import useConfig from "../../../../../../hooks/api/useConfig";
import useMovieRecommendations from "../../../../../../hooks/api/useMovieRecommendations";
import { Movie } from "../../../../../../services/moviesService";
import PosterPath, { PosterSizes } from "../../../../../../utils/posterPath";
import styles from "./Recommendations.module.scss";

interface Props {
  movieId: number;
}

const Recommendations = ({ movieId }: Props) => {
  const { data, error, isLoading } = useMovieRecommendations(movieId);
  const { data: config } = useConfig();

  console.log(data);

  let theRecommendations: Movie[] = [];

  if (data) {
    theRecommendations = [...data.results];
    theRecommendations.length = 4;
  }

  if (error) return <div className="alert alert-danger">{error.message}</div>;

  if (isLoading)
    return <div className="alert alert-info">Loading Recommendations...</div>;

  return (
    <div className={["mb-5", styles.recommendations].join(" ")}>
      <h3>Recommendations</h3>
      <div className={[styles.theRecommendations].join(" ")}>
        {theRecommendations.map((movie) => (
          <div key={movie.id} className={[styles.recommendation].join(" ")}>
            <Link to={`/movie/${movie.id}`}>
              <img
                src={PosterPath(config, movie.poster_path, PosterSizes.w342)}
                className={["rounded", "card-img-top", styles.moviePoster].join(
                  " "
                )}
                alt={movie.title}
                width="257"
                height="200"
              />
              <p>{movie.title}</p>
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-4">
        View All Recommendations ({data?.total_results})
      </div>
    </div>
  );
};

export default Recommendations;
