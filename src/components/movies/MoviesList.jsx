import { useEffect, useContext } from "react";

import MovieCard from "./MovieCard";
import SkeletonCard from "./SkeletonCard";
import MovieContext from "../../context/home/MovieContext";
import Container from "../Container";

function MoviesList() {
  const { movies, loading, fetchMovies } = useContext(MovieContext);
  useEffect(() => {
    fetchMovies("now_playing", "movie");
  }, []);

  if (!loading) {
    return (
      <Container>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} media_type={"movie"} />
        ))}
      </Container>
    );
  } else {
    return <SkeletonCard count={3} />;
  }
}

export default MoviesList;
