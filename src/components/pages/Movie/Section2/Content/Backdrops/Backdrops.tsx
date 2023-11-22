import { useParams } from "react-router-dom";
import useConfig from "../../../../../../hooks/api/useConfig";
import useImages from "../../../../../../hooks/api/useImages";
import { Backdrop } from "../../../../../../services/imagesService";
import BackdropPath, {
  BackdropSizes,
} from "../../../../../../utils/backdropPath";
import styles from "./Backdrops.module.scss";

const Images = () => {
  const params = useParams();
  const movieId = Number(params.id);

  const { data, error, isLoading } = useImages(movieId);
  const { data: config } = useConfig();

  let theBackdrops: Backdrop[] = [];

  if (data) {
    theBackdrops = [...data.backdrops];
    theBackdrops.length = 2;
  }

  if (error) return <div className="alert alert-danger">{error.message}</div>;

  if (isLoading)
    return <div className="alert alert-info">Loading Backdrops...</div>;

  return (
    <div className={["mb-5", styles.backdrops].join(" ")}>
      <h3>Backdrops</h3>
      <div className={[styles.theBackdrops].join(" ")}>
        {theBackdrops.map((backdrop) => (
          <div key={backdrop.file_path} className={[styles.backdrop].join(" ")}>
            <img
              src={BackdropPath(config, backdrop.file_path, BackdropSizes.w780)}
              className={["rounded", "card-img-top", styles.backdropImage].join(
                " "
              )}
              alt="Backdrop"
              width={backdrop.width}
              height={backdrop.height}
            />
          </div>
        ))}
      </div>
      <div className="mt-4">View All Backdrops ({data?.backdrops.length})</div>
    </div>
  );
};

export default Images;
