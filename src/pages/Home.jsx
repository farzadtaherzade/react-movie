import HeroSlider from "../components/home/HeroSlider";
import MoviesList from "../components/movies/MoviesList";

function Home() {
  return (
    <div className="bg-base-100">
      <HeroSlider />
      <h1 className="my-5">Now Playing</h1>
      <MoviesList />
    </div>
  );
}

export default Home;
