import styles from "./MovieSection2Content.module.scss";
import { Cast } from "./Cast";
import { Video } from "./Video";

const MovieSection2Content = () => {
  return (
    <div
      className={["col-12", "col-lg-9 col-xxl-10", styles.contentWrapper].join(
        " "
      )}>
      <Cast />
      <hr />
      <h2>Media</h2>
      <Video />
    </div>
  );
};

export default MovieSection2Content;
