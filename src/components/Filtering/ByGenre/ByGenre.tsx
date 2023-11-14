import useGenres from "../../../hooks/useGenres";
import styles from "./ByGenre.module.scss";

const ByGenre = () => {
  const { data, error, isLoading } = useGenres();

  if (error) return <div className="alert alert-danger">{error.message}</div>;

  if (isLoading)
    return <div className="alert alert-info">Loading genres...</div>;

  return (
    <>
      <div className={["h5", "mt-3", styles.filterGenreTitle].join(" ")}>
        Genre
      </div>
      <ul className={["genresList", styles.cardGenre].join(" ")}>
        {data?.genres.map((genre) => (
          <li key={genre.id}>
            <button
              className={["btn", "btn-secondary", "badge"].join(" ")}
              onClick={() => console.log(genre.id, genre.name)}>
              {/* {genre.id}- */}
              {genre.name}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ByGenre;
