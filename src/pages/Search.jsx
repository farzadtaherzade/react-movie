import Container from "../components/Container";
import { useContext, useEffect } from "react";
import MovieCard from "../components/movies/MovieCard";
import MovieContext from "../context/home/MovieContext";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { searchMovies, loading, movies } = useContext(MovieContext);

  const searchQuery = searchParams.get("s") || "";
  console.log(searchQuery);
  useEffect(() => {
    searchMovies(searchQuery);
  }, [searchQuery]);
  return (
    <div>
      <Container>
        {movies.map((movie) => (
          <div className="" key={movie.id}>
            {movie.media_type === "movie" || movie.media_type === "tv" ? (
              <MovieCard movie={movie} media_type={movie.media_type} />
            ) : (
              ""
            )}
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Search;
