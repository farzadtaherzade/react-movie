import MovieCard from "../components/movies/MovieCard";
import Container from "../components/Container";
import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SkeletonCard from "../components/movies/SkeletonCard";
import MovieContext from "../context/home/MovieContext";

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { movies, loading, fetchMovies } = useContext(MovieContext);

  const mediaQueryParams = searchParams.get("media") || "popular";
  const searchQueryParams = searchParams.get("media") || "popular";

  useEffect(() => {
    fetchMovies(mediaQueryParams, "movie");
  }, [mediaQueryParams]);

  const setQuery = (event, query) => {
    setSearchParams({ media: query });
  };

  if (!loading) {
    return (
      <div className="mb-12">
        <div className="flex xl:justify-start items-center gap-3 mb-7 justify-center">
          <span
            className={`btn btn-primary btn-outline ${
              mediaQueryParams == "popular" ? "btn-active" : ""
            }`}
            onClick={(event) => setQuery(event, "popular")}
          >
            Popular
          </span>
          <span
            className={`btn btn-primary btn-outline ${
              mediaQueryParams == "now_playing" ? "btn-active" : ""
            }`}
            onClick={(event) => setQuery(event, "now_playing")}
          >
            Now Playing
          </span>
          <span
            className={`btn btn-primary btn-outline ${
              mediaQueryParams == "top_rated" ? "btn-active" : ""
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
            <MovieCard key={movie.id} movie={movie} media_type={"movie"} />
          ))}
        </Container>
      </div>
    );
  } else {
    return <SkeletonCard count={3} />;
  }
};

export default Movies;
