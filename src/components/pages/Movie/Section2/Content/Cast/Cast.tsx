import { useParams } from "react-router-dom";
import useCredits from "../../../../../../hooks/api/useCredits";
import { TheCast } from "../../../../../../services/creditsService";
import { ActorCard } from "../../../../../ActorCard";
import styles from "./Cast.module.scss";

const Cast = () => {
  const params = useParams();
  const movieId = Number(params.id);

  const { data, error, isLoading } = useCredits(movieId);

  let cast: TheCast[] = [];

  if (data) {
    cast = [...data.cast];
    cast.length = 6;
  }

  if (error) return <div className="alert alert-danger">{error.message}</div>;

  if (isLoading)
    return <div className="alert alert-info">Loading credits...</div>;

  return (
    <div className={[styles.cast].join(" ")}>
      <h2>Cast</h2>
      <div className={[styles.theCast].join(" ")}>
        {cast.map((actor) => (
          <ActorCard key={actor.id} actor={actor} />
        ))}
      </div>
      <div className="mt-4">Full Cast & Crew</div>
    </div>
  );
};

export default Cast;
