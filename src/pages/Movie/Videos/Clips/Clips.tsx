import { useParams } from "react-router-dom";
import { VideoCard } from "../../../../components/VideoCard";
import useVideos from "../../../../hooks/api/useVideos";
import useGetVideos from "../../../../hooks/useGetVideos";

const Clips = () => {
  const params = useParams();
  const movieId = Number(params.id);

  const {
    data: videosResponse,
    error: videosError,
    isLoading: videosIsLoading,
  } = useVideos(movieId); // TODO: handle error

  const { clips } = useGetVideos(videosResponse);

  if (clips?.length === 0) return <p>No clips for this movie</p>;

  return (
    <div className={["videos"].join(" ")}>
      {clips?.map((clip) => (
        <VideoCard key={clip.id} trailer={clip} />
      ))}
    </div>
  );
};

export default Clips;
