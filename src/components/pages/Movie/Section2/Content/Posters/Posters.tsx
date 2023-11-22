import { useParams } from "react-router-dom";
import useConfig from "../../../../../../hooks/api/useConfig";
import useImages from "../../../../../../hooks/api/useImages";
import { Poster } from "../../../../../../services/imagesService";
import PosterPath, { PosterSizes } from "../../../../../../utils/posterPath";
import styles from "./Posters.module.scss";

interface Props {
  movieId: number;
}

const Posters = ({ movieId }: Props) => {
  const { data, error, isLoading } = useImages(movieId);
  const { data: config } = useConfig();

  let thePosters: Poster[] = [];

  if (data) {
    thePosters = [...data.posters];
    thePosters.length = 4;
  }

  if (error) return <div className="alert alert-danger">{error.message}</div>;

  if (isLoading)
    return <div className="alert alert-info">Loading Backdrops...</div>;

  return (
    <div className={["mb-5", styles.posters].join(" ")}>
      <h3>Posters</h3>
      <div className={[styles.thePosters].join(" ")}>
        {thePosters.map((poster) => (
          <div key={poster.file_path} className={[styles.poster].join(" ")}>
            <img
              src={PosterPath(config, poster.file_path, PosterSizes.w342)}
              className={["rounded", "card-img-top", styles.posterImage].join(
                " "
              )}
              alt="Backdrop"
              width={poster.width}
              height={poster.height}
            />
          </div>
        ))}
      </div>
      <div className="mt-4">View All Posters ({data?.posters.length})</div>
    </div>
  );
};

export default Posters;
