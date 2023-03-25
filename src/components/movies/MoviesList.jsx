import { useEffect, useContext } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import MovieCard from "./MovieCard";
import MovieContext from "../../context/home/MovieContext";
import Container from "../Container";

function MoviesList() {
  const { movies, loading, fetchMovies } = useContext(MovieContext);
  useEffect(() => {
    fetchMovies();
  }, []);

  if (!loading) {
    return (
      <Container>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Container>
    );
  } else {
    return (
      <SkeletonTheme
        baseColor="#202020"
        highlightColor="#444"
        className="w-full grid gap-5 grid-col-3 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-col-3 md:grid-cols-2 place-content-center"
      >
        <Skeleton className="rounded-none h-64" count={3} />
      </SkeletonTheme>
    );
  }
}

export default MoviesList;
