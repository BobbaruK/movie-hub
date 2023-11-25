import { TheVideo } from "../../services/videoService";
import ReleaseDateUI from "../../utils/releaseDateUI";
import styles from "./VideoCard.module.scss";

interface Props {
  trailer: TheVideo;
}

const VideoCard = ({ trailer }: Props) => {
  const { releaseDate } = ReleaseDateUI(trailer.published_at);
  return (
    <div className={["card"].join(" ")}>
      <iframe
        src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&origin=https%3A%2F%2Fwww.themoviedb.org&hl=en&modestbranding=1&fs=1&autohide=1`}
        className={["rounded", styles.iframeVideo].join(" ")}
        title={trailer.name}
        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <div className="card-body">
        <div className="h5 card-title">{trailer.name}</div>
        <p className="card-text">
          {trailer.type} - {releaseDate} on {trailer.site}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
