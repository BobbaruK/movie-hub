import { Link } from "react-router-dom";
import { TheCast } from "../../services/creditsService";
import { ActorCard } from "../ActorCard";
import styles from "./MovieCast.module.scss";

interface Props {
  cast: TheCast[] | undefined;
  error: Error | null;
  isLoading: boolean;
}

const MovieCast = ({ cast, error, isLoading }: Props) => {
  let output: TheCast[] = [];

  if (cast && cast.length) {
    output = [...cast];
    output.length = 6;
  }

  if (error) return <div className="alert alert-danger">{error.message}</div>;

  if (isLoading)
    return <div className="alert alert-info">Loading credits...</div>;

  return (
    <div className={[styles.movieCast].join(" ")}>
      <h2>Cast</h2>
      {output?.length ? (
        <>
          <div className={[styles.movieTheCast].join(" ")}>
            {output.map((actor) => (
              <ActorCard key={actor.id} actor={actor} />
            ))}
          </div>
          <div className="mt-4">
            <Link to="cast">Full Cast & Crew</Link>
          </div>
        </>
      ) : (
        <p>No cast for this movie.</p>
      )}
    </div>
  );
};

export default MovieCast;
