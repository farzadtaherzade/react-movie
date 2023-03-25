import MovieCard from "../components/movies/MovieCard";
import Container from "../components/Container";
import { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieContext from "../context/home/MovieContext";
import SkeletonCard from "../components/movies/SkeletonCard";

const Tvs = () => {
  const { movies, loading, fetchMovies } = useContext(MovieContext);
  const [searchParams, setSearchParams] = useSearchParams();

  const params = searchParams.get("media") || "popular";

  useEffect(() => {
    fetchMovies(params, "tv");
  }, [params]);

  const setQuery = (event, query) => {
    setSearchParams({ media: query });
  };

  if (!loading) {
    return (
      <div className="mb-12">
        <div className="flex xl:justify-start items-center gap-3 mb-7 justify-center">
          <span
            className={`btn btn-primary btn-outline ${
              params == "popular" ? "btn-active" : ""
            }`}
            onClick={(event) => setQuery(event, "popular")}
          >
            Popular
          </span>
          <span
            className={`btn btn-primary btn-outline ${
              params == "top_rated" ? "btn-active" : ""
            }`}
            onClick={(event) => setQuery(event, "top_rated")}
          >
            Top Rated
          </span>
          <span className="btn btn-accent" onClick={() => setSearchParams()}>
            Clear
          </span>
        </div>
        <Container>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} media_type={"tv"} />
          ))}
        </Container>
      </div>
    );
  } else {
    return <SkeletonCard count={3} />;
  }
};

export default Tvs;
