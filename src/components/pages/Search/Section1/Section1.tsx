import useSearchMovies from "../../../../hooks/api/useSearchMovies";
import MovieCard from "../../../MovieCard";

const SearchSection1 = () => {
  const queryParameters = new URLSearchParams(window.location.search);
  const query = queryParameters.get("query");
  const { data, error, isLoading } = useSearchMovies(query!);

  console.log(data);

  if (error) return <div className="alert alert-danger">{error.message}</div>;

  if (isLoading)
    return <div className="alert alert-info">Loading movies...</div>;

  if (data && data.results.length === 0)
    return (
      <div className="alert alert-warning">No movies found</div>
    );

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <div className="cardsWrapper">
            {data?.results.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection1;
