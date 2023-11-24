import { Link } from "react-router-dom";
import { Configuration } from "../../services/configService";
import { Movie, MoviesResponse } from "../../services/moviesService";
import PosterPath, { PosterSizes } from "../../utils/posterPath";
import styles from "./MovieRecommendations.module.scss";

interface Props {
  recommendations: MoviesResponse | undefined;
  error: Error | null;
  isLoading: boolean;
  config: Configuration | undefined;
}

const MovieRecommendations = ({
  recommendations,
  error,
  isLoading,
  config,
}: Props) => {
  let output: Movie[] = [];

  if (recommendations && recommendations.results.length) {
    output = [...recommendations.results];
    output.length = 4;
  }

  if (error) return <div className="alert alert-danger">{error.message}</div>;

  if (isLoading)
    return <div className="alert alert-info">Loading Recommendations...</div>;

  return (
    <div className={["mb-5", styles.movieRecommendations].join(" ")}>
      <h3>Recommendations</h3>

      {recommendations?.results.length ? (
        <>
          <div className={[styles.movieTheRecommendations].join(" ")}>
            {output.map((movie) => (
              <div
                key={movie.id}
                className={[styles.movieRecommendation].join(" ")}>
                <Link to={`/movie/${movie.id}`}>
                  <img
                    src={PosterPath(
                      config,
                      movie.poster_path,
                      PosterSizes.w342
                    )}
                    className={[
                      "rounded",
                      "card-img-top",
                      styles.movieRecommendationPoster,
                    ].join(" ")}
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
            View All Recommendations ({recommendations?.total_results})
          </div>
        </>
      ) : (
        <p>No cast for this movie. lmao</p>
      )}
    </div>
  );
};

export default MovieRecommendations;
