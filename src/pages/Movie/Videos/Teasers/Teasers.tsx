import { useParams } from "react-router-dom";
import useVideos from "../../../../hooks/api/useVideos";
import useGetVideos from "../../../../hooks/useGetVideos";
import { VideoCard } from "../../../../components/VideoCard";

const Teasers = () => {
  const params = useParams();
  const movieId = Number(params.id);

  const {
    data: videosResponse,
    error: videosError,
    isLoading: videosIsLoading,
  } = useVideos(movieId); // TODO: handle error

  const { teasers } = useGetVideos(videosResponse);

  if (teasers?.length === 0) return <p>No teasers for this movie</p>;

  return (
    <div className={["videos"].join(" ")}>
      {teasers?.map((teaser) => (
        <VideoCard key={teaser.id} trailer={teaser} />
      ))}
    </div>
  );
};

export default Teasers;
