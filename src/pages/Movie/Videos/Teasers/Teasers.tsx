import { useParams } from "react-router-dom";
import useVideos from "../../../../hooks/api/useVideos";
import useGetVideos from "../../../../hooks/useGetVideos";
import { VideoCard } from "../../../../components/VideoCard";

const Teasers = () => {
  const params = useParams();
  const movieId = Number(params.id);

  const { data: videosResponse } = useVideos(movieId); // error is handled in Movie.tsx

  const { teasers } = useGetVideos(videosResponse);

  if (teasers?.length === 0) return <p>No teasers for this movie</p>;

  const copyOfTeasers = [...[teasers]];

  // TODO: solve loading time of yt vids: maybe pagination
  console.log(teasers);
  console.log(copyOfTeasers);

  return (
    <div className={["videos"].join(" ")}>
      {teasers?.map((teaser) => (
        <VideoCard key={teaser.id} trailer={teaser} />
      ))}
    </div>
  );
};

export default Teasers;
