import { Link } from "react-router-dom";
import { TheVideo } from "../../services/videoService";
import styles from "./MovieVideos.module.scss";

interface Props {
  videos: TheVideo[] | undefined;
  error: Error | null;
  isLoading: boolean;
}

const Video = ({ videos, error, isLoading }: Props) => {
  let output: TheVideo[] = [];

  if (videos && videos.length) {
    output = [...videos];
    output.length = 2;
  }

  if (error) return <div className="alert alert-danger">{error.message}</div>;

  if (isLoading)
    return <div className="alert alert-info">Loading videos...</div>;

  return (
    <div className={["mb-5", styles.videos].join(" ")}>
      <h3>Videos</h3>
      {output.length ? (
        <>
          <div className={[styles.theVideos].join(" ")}>
            {output.map((video) => (
              <div key={video.id} className={[styles.video].join(" ")}>
                <iframe
                  src={`https://www.youtube.com/embed/${video.key}?autoplay=1&origin=https%3A%2F%2Fwww.themoviedb.org&hl=en&modestbranding=1&fs=1&autohide=1`}
                  className={["rounded", styles.ytIframe].join(" ")}
                  title="YouTube video player"
                  // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <Link to="videos/trailers">All Videos ({videos?.length})</Link>
          </div>
        </>
      ) : (
        <p>No videos for this movie.</p>
      )}
    </div>
  );
};

export default Video;
