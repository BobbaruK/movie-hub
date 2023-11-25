import { useParams } from "react-router-dom";
import { VideoCard } from "../../../../components/VideoCard";
import useVideos from "../../../../hooks/api/useVideos";
import useGetVideos from "../../../../hooks/useGetVideos";

const BehindTheScenes = () => {
  const params = useParams();
  const movieId = Number(params.id);

  const { data: videosResponse } = useVideos(movieId); // error is handled in Movie.tsx

  const { bts } = useGetVideos(videosResponse);

  if (bts?.length === 0) return <p>No behind the scenes for this movie</p>;

  return (
    <div className={["videos"].join(" ")}>
      {bts?.map((b) => (
        <VideoCard key={b.id} trailer={b} />
      ))}
    </div>
  );
};

export default BehindTheScenes;
