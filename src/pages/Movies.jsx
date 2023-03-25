import MovieCard from "../components/movies/MovieCard";
import Container from "../components/Container";
import { useContext, useEffect, useState } from "react";
import UpcomingContext from "../context/Movies/UpcomingContext";

const Movies = () => {
  const { movies, loading, fetchMovies } = useContext(UpcomingContext);

  useEffect(() => {
    fetchMovies("popular", "movie");
  }, []);

  return (
    <Container>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} media_type={"movie"} />
      ))}
    </Container>
  );
};

export default Movies;
