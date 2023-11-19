import useGenres from "../../../hooks/useGenres";
import useFilteringMovies from "../../../stores/filterStore";
import styles from "./ByGenre.module.scss";

const ByGenre = () => {
  const { data, error, isLoading } = useGenres();
  const { genres, setGenres, resetGenres } = useFilteringMovies();

  if (error) return <div className="alert alert-danger">{error.message}</div>;

  if (isLoading)
    return <div className="alert alert-info">Loading genres...</div>;

  return (
    <>
      <div className={["h5", "mt-3", "sidebar__subtitle"].join(" ")}>
        Genre
        {genres.length !== 0 && (
          <button
            className="btn btn-primary btn-sm"
            onClick={() => resetGenres()}>
            Reset
          </button>
        )}
      </div>
      <ul className={["genresList", styles.cardGenre].join(" ")}>
        {data?.genres.map((genre) => (
          <li key={genre.id}>
            <button
              className={[
                "btn",
                `btn-${genres.includes(genre.id) ? "success" : "secondary"}`,
                "badge",
              ].join(" ")}
              onClick={() => setGenres(genre.id)}>
              {genre.name}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ByGenre;
