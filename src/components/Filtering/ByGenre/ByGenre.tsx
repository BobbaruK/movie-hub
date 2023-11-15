import { useReducer } from "react";
import useGenres from "../../../hooks/useGenres";
import filterReducer from "../../../reducers/filterReducer";
import styles from "./ByGenre.module.scss";

const ByGenre = () => {
  const { data, error, isLoading } = useGenres();

  const [filters, filterBy] = useReducer(filterReducer, {
    genres: [],
    language: "",
  });

  if (error) return <div className="alert alert-danger">{error.message}</div>;

  if (isLoading)
    return <div className="alert alert-info">Loading genres...</div>;

  return (
    <>
      <div className={["h5", "mt-3", styles.filterGenreTitle].join(" ")}>
        Genre
      </div>

      {/*  */}
      {/*  */}
      {/*  */}
      {filters.genres.map((g) => (
        <p key={g}>{g}</p>
      ))}
      {/*  */}
      {/*  */}
      {/*  */}

      <ul className={["genresList", styles.cardGenre].join(" ")}>
        {data?.genres.map((genre) => (
          <li key={genre.id}>
            <button
              className={[
                "btn",
                `btn-${
                  filters.genres.includes(genre.id) ? "success" : "secondary"
                }`,
                "badge",
              ].join(" ")}
              onClick={() =>
                filterBy({
                  type: "ByGenre",
                  genreId: genre.id,
                })
              }>
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
