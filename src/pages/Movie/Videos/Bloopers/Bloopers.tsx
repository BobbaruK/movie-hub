import { useParams } from "react-router-dom";
import { VideoCard } from "../../../../components/VideoCard";
import useVideos from "../../../../hooks/api/useVideos";
import useGetVideos from "../../../../hooks/useGetVideos";

const Bloopers = () => {
  const params = useParams();
  const movieId = Number(params.id);

  const { data: videosResponse } = useVideos(movieId); // error is handled in Movie.tsx

  const { bloopers } = useGetVideos(videosResponse);

  if (bloopers?.length === 0) return <p>No bloopers for this movie</p>;

  return (
    <div className={["videos"].join(" ")}>
      {bloopers?.map((blooper) => (
        <VideoCard key={blooper.id} trailer={blooper} />
      ))}
    </div>
  );
};

export default Bloopers;
