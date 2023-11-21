import useConfig from "../../hooks/api/useConfig";
import { TheCast } from "../../services/creditsService";
import ProfilePath, { ProfileSizes } from "../../utils/profilePath";
import styles from "./ActorCard.module.scss";

interface Props {
  actor: TheCast;
}

const ActorCard = ({ actor }: Props) => {
  const { data: config } = useConfig();

  return (
    <>
      <div className={["card", styles.actorCard].join(" ")}>
        <img
          src={ProfilePath(config, actor.profile_path, ProfileSizes.h632)}
          className={["card-img-top", styles.actorImage].join(" ")}
          alt={actor.name}
          width="185"
          height="278"
        />
        <div className={["card-body", styles.actorBody].join(" ")}>
          <div className="h5 card-title">{actor.name}</div>
          <p className="card-text">{actor.character}</p>
        </div>
      </div>
    </>
  );
};

export default ActorCard;
