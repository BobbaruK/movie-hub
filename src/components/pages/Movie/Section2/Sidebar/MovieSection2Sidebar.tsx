import { useParams } from "react-router-dom";
import useKeywords from "../../../../../hooks/api/useKeywords";
import useLanguages from "../../../../../hooks/api/useLanguages";
import useMovie from "../../../../../hooks/api/useMovie";
import styles from "./MovieSection2Sidebar.module.scss";

const MovieSection2Sidebar = () => {
  const params = useParams();
  const movieId = Number(params.id);
  const { data: movie } = useMovie(movieId);
  const { data: languages } = useLanguages(); // TODO: handle error
  const selectedLanguage = languages?.find(
    (lang) => lang.iso_639_1 === movie?.original_language
  );
  const {
    data: keywords,
    error: keywordsError,
    isLoading: keywordsLoading,
  } = useKeywords(movieId);

  return (
    <div className={["col-12", "col-lg-3", styles.sidebar].join(" ")}>
      {movie?.status && (
        <div className="status">
          <div className="h4">Status</div>
          {movie?.status}
        </div>
      )}
      {movie?.original_language && (
        <div className="originalLanguage">
          <div className="h4">Original Language</div>
          {selectedLanguage?.english_name}
        </div>
      )}
      {movie?.budget !== 0 && (
        <div className="budget">
          <div className="h4">Budget</div>${movie?.budget.toLocaleString()}
        </div>
      )}
      {movie?.revenue !== 0 && (
        <div className="revenue">
          <div className="h4">Revenue</div>${movie?.revenue.toLocaleString()}
        </div>
      )}
      {keywords?.keywords.length !== 0 && (
        <div className="keywords">
          <div className="h4">Keywords</div>
          <div className={[styles.keywordsWrapper].join(" ")}>
            {keywordsError && (
              <div className="alert alert-danger w-100">
                {keywordsError.message}
              </div>
            )}
            {keywordsLoading && (
              <div className="alert alert-info w-100">Loading keywords...</div>
            )}
            {keywords?.keywords.map((key) => (
              <span key={key.id} className="badge text-bg-secondary">
                {key.name}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieSection2Sidebar;
