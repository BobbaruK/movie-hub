import { useParams } from "react-router-dom";
import useCredits from "../../../../../../hooks/api/useCredits";
import { TheCast } from "../../../../../../services/creditsService";
import { ActorCard } from "../../../../../ActorCard";
import styles from "./Cast.module.scss";

const Cast = () => {
  const params = useParams();
  const movieId = Number(params.id);

  const {
    data: credits,
    error: creditsError,
    isLoading: creditsLoading,
  } = useCredits(movieId);

  let cast: TheCast[] = [];

  if (credits) {
    cast = [...credits.cast];
    cast.length = 4;
  }

  if (creditsError)
    return <div className="alert alert-danger">{creditsError.message}</div>;

  if (creditsLoading)
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
