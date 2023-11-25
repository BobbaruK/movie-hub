import { useParams } from "react-router-dom";
import useVideos from "../../../../hooks/api/useVideos";
import useGetVideos from "../../../../hooks/useGetVideos";
import { VideoCard } from "../../../../components/VideoCard";

const Trailers = () => {
  const params = useParams();
  const movieId = Number(params.id);

  const {
    data: videosResponse,
    error: videosError,
    isLoading: videosIsLoading,
  } = useVideos(movieId); // TODO: handle error

  const { trailers } = useGetVideos(videosResponse);

  if (trailers?.length === 0) return <p>No trailers for this movie</p>;

  return (
    <div className={["videos"].join(" ")}>
      {trailers?.map((trailer) => (
        <VideoCard key={trailer.id} trailer={trailer} />
      ))}
    </div>
  );
};

export default Trailers;
