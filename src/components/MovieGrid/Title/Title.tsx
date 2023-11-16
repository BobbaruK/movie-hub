import React from "react";
import useMovieGridTitle from "../../../hooks/useMovieGridTitle";

const Title = () => {
  const { activeGenres, activeLanguage } = useMovieGridTitle();

  return (
    <h3>
      {activeLanguage?.english_name} Movies{activeGenres.length > 0 && ": "}
      {activeGenres.length > 0 &&
        activeGenres.map((genre, index) => (
          <React.Fragment key={genre.id}>
            {index !== 0 && ", "}
            <span key={genre.id}>{genre.name}</span>
          </React.Fragment>
        ))}
    </h3>
  );
};

export default Title;
