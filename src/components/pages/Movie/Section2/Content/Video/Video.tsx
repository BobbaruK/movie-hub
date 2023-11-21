import { useParams } from "react-router-dom";
import useVideos from "../../../../../../hooks/api/useVideos";
import { TheVideo } from "../../../../../../services/videoService";
import styles from "./Video.module.scss";

const Video = () => {
  const params = useParams();
  const movieId = Number(params.id);

  const { data, error, isLoading } = useVideos(movieId);

  let theVideo: TheVideo[] = [];

  if (data) {
    theVideo = [...data.results];
    theVideo.length = 2;
  }

  if (error) return <div className="alert alert-danger">{error.message}</div>;

  if (isLoading)
    return <div className="alert alert-info">Loading credits...</div>;

  return (
    <div className={[styles.videos].join(" ")}>
      <h3>Video</h3>
      <div className={[styles.theVideos].join(" ")}>
        {theVideo.map((video) => (
          <div key={video.id} className={[styles.video].join(" ")}>
            <iframe
              src={`https://www.youtube.com/embed/${video.key}?autoplay=1&origin=https%3A%2F%2Fwww.themoviedb.org&hl=en&modestbranding=1&fs=1&autohide=1`}
              className={[styles.ytIframe].join(" ")}
              title="YouTube video player"
              // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        ))}
      </div>
      <div className="mt-4">View All Videos ({data?.results.length})</div>
    </div>
  );
};

export default Video;
