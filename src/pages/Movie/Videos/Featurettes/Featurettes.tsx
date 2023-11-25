import { useParams } from "react-router-dom";
import { VideoCard } from "../../../../components/VideoCard";
import useVideos from "../../../../hooks/api/useVideos";
import useGetVideos from "../../../../hooks/useGetVideos";

const Featurettes = () => {
  const params = useParams();
  const movieId = Number(params.id);

  const {
    data: videosResponse,
    error: videosError,
    isLoading: videosIsLoading,
  } = useVideos(movieId); // TODO: handle error

  const { featurettes } = useGetVideos(videosResponse);

  if (featurettes?.length === 0) return <p>No featurettes for this movie</p>;

  return (
    <div className={["videos"].join(" ")}>
      {featurettes?.map((featurette) => (
        <VideoCard key={featurette.id} trailer={featurette} />
      ))}
    </div>
  );
};

export default Featurettes;
