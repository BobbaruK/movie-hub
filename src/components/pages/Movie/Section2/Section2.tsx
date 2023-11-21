import { useParams } from "react-router-dom";
import useKeywords from "../../../../hooks/api/useKeywords";
import useLanguages from "../../../../hooks/api/useLanguages";
import useMovie from "../../../../hooks/api/useMovie";
import styles from "./Section2.module.scss";

const MovieSection2 = () => {
  const params = useParams();
  const movieId = Number(params.id);
  const { data: movie } = useMovie(movieId); // TODO: handle error
  const { data: languages } = useLanguages(); // TODO: handle error
  const selectedLanguage = languages?.find(
    (lang) => lang.iso_639_1 === movie?.original_language
  );
  const { data: keywords } = useKeywords(movieId); // TODO: handle error

  return (
    <section className={[styles.details].join(" ")}>
      <div className="container">
        <div className="row">
          <div className={["col-12", "col-lg-3", styles.sidebar].join(" ")}>
            <div className="status">
              <div className="h4">Status</div>
              {movie?.status}
            </div>
            <div className="originalLanguage">
              <div className="h4">Original Language</div>
              {selectedLanguage?.english_name}
            </div>
            <div className="budget">
              <div className="h4">Budget</div>${movie?.budget.toLocaleString()}
            </div>
            <div className="revenue">
              <div className="h4">Revenue</div>$
              {movie?.revenue.toLocaleString()}
            </div>
            <div className="keywords">
              <div className="h4">Keywords</div>
              <div className={[styles.keywordsWrapper].join(" ")}>
                {keywords?.keywords.map((key) => (
                  <span key={key.id} className="badge text-bg-secondary">
                    {key.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-9">content</div>
        </div>
      </div>
    </section>
  );
};

export default MovieSection2;
