import React from "react";
import { useParams } from "react-router-dom";
import styles from "./Section1.module.scss";
import useConfig from "../../../../../hooks/api/useConfig";
import useCredits from "../../../../../hooks/api/useCredits";
import ProfilePath, { ProfileSizes } from "../../../../../utils/profilePath";

const MovieCastSection1 = () => {
  const params = useParams();
  const movieId = Number(params.id);

  const { data: config } = useConfig();

  const {
    data: creditsResponse,
    error: castError,
    isLoading: castIsLoading,
  } = useCredits(movieId);

  if (castError)
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <div className="alert alert-danger">{castError.message}</div>
          </div>
        </div>
      </div>
    );

  if (castIsLoading)
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <div className="alert alert-info">Loading cast and crew...</div>
          </div>
        </div>
      </div>
    );

  return (
    <section className={[styles.castAndCrew].join(" ")}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <h2>
              Cast <small>({creditsResponse?.cast.length})</small>
            </h2>
            <ul className={[styles.credit].join(" ")}>
              {creditsResponse?.cast.map((actor) => (
                <li key={actor.id}>
                  <img
                    src={ProfilePath(
                      config,
                      actor.profile_path,
                      ProfileSizes.w45
                    )}
                    alt={actor.name}
                  />
                  <div className={[styles.name].join(" ")}>{actor.name}</div>
                  <div className={[styles.job].join("")}>{actor.character}</div>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-12 col-md-6">
            <h2>
              Crew <small>({creditsResponse?.crew.length})</small>
            </h2>
            <ul className={[styles.credit].join(" ")}>
              {creditsResponse?.crew
                .sort((a, b) => {
                  if (a.department < b.department) return -1;
                  if (a.department > b.department) return 1;
                  return 0;
                })
                .map((crewMember) => (
                  <React.Fragment key={crewMember.credit_id}>
                    <li>
                      <img
                        src={ProfilePath(
                          config,
                          crewMember.profile_path,
                          ProfileSizes.w45
                        )}
                        alt={crewMember.name}
                      />
                      <div className={[styles.name].join(" ")}>
                        {crewMember.name}
                      </div>
                      <div className={[styles.job].join("")}>
                        {crewMember.department} - {crewMember.job}
                      </div>
                    </li>
                  </React.Fragment>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieCastSection1;
