import { useParams } from "react-router-dom";
import useCredits from "../../../../../hooks/api/useCredits";
import styles from "./MovieSection2Content.module.scss";
import useConfig from "../../../../../hooks/api/useConfig";
import ProfilePath, { ProfileSizes } from "../../../../../utils/profilePath";
import { Cast, Crew } from "../../../../../services/creditsService";

const MovieSection2Content = () => {
  const params = useParams();
  const movieId = Number(params.id);

  const {
    data: credits,
    error: creditsError,
    isLoading: creditsLoading,
  } = useCredits(movieId);

  const { data: config } = useConfig();

  let cast: Cast[] = [];

  if (credits) {
    cast = [...credits.cast];
    cast.length = 10;
  }

  return (
    <div className={["col-12", "col-lg-9", styles.contentWrapper].join(" ")}>
      <div className={[styles.cast].join(" ")}>
        <h2>Cast</h2>
        <div className={[styles.theCast].join(" ")}>
          {cast.map((actor) => (
            <div key={actor.id}>
              <img
                src={ProfilePath(config, actor.profile_path, ProfileSizes.w185)}
                alt={actor.name}
                width="185"
                height="278"
              />
              <p className="lead">{actor.name}</p>
              <p>{actor.character}</p>
            </div>
          ))}
          <div>
            see more
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieSection2Content;
