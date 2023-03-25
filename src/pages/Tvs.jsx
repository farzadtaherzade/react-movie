import MovieCard from "../components/movies/MovieCard";
import Container from "../components/Container";
import { useContext, useEffect, useState } from "react";
import UpcomingContext from "../context/Movies/UpcomingContext";

const Tvs = () => {
  const { movies, loading, fetchMovies } = useContext(UpcomingContext);

  useEffect(() => {
    fetchMovies("popular", "tv");
  }, []);

  return (
    <Container>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} media_type={"tv"} />
      ))}
    </Container>
  );
};

export default Tvs;
