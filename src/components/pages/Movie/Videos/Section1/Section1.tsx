import { NavLink, Outlet, useParams } from "react-router-dom";
import useVideos from "../../../../../hooks/api/useVideos";
import useGetVideos from "../../../../../hooks/useGetVideos";
import styles from "./Section1.module.scss";

const Section1 = () => {
  const params = useParams();
  const movieId = Number(params.id);

  const {
    data: videosResponse,
    error: videosError,
    isLoading: videosIsLoading,
  } = useVideos(movieId);

  const { trailers, teasers, clips, bts, bloopers, featurettes } =
    useGetVideos(videosResponse);

  const videoTypes = [
    {
      label: "Trailers",
      key: "trailers",
      count: trailers?.length,
    },
    {
      label: "Teasers",
      key: "teasers",
      count: teasers?.length,
    },
    {
      label: "Clips",
      key: "clips",
      count: clips?.length,
    },
    {
      label: "Behind the Scenes",
      key: "behind-the-scenes",
      count: bts?.length,
    },
    {
      label: "Bloopers",
      key: "bloopers",
      count: bloopers?.length,
    },
    {
      label: "Featurettes",
      key: "featurettes",
      count: featurettes?.length,
    },
  ];

  if (videosError)
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <div className="alert alert-danger">{videosError.message}</div>
          </div>
        </div>
      </div>
    );

  if (videosIsLoading)
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <div className="alert alert-info">Loading videos...</div>
          </div>
        </div>
      </div>
    );

  return (
    <>
      <section className={[styles.videos].join(" ")}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 col-lg-3">
              <h2>Videos</h2>
              <ul className="list-group">
                {videoTypes.map((type, index) => (
                  <li
                    key={index}
                    className={[
                      "list-group-item",
                      "activeListGroupItem",
                      styles.listGroupItem,
                    ].join(" ")}>
                    <NavLink
                      to={type.key}
                      className={[styles.linkItem].join(" ")}>
                      {type.label}
                      <span className="badge bg-secondary">{type.count}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-12 col-md-8 col-lg-9">
              <Outlet />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section1;
