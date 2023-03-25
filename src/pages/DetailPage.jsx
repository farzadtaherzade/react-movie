import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieContext from "../context/home/MovieContext";
import { FaFilm } from "react-icons/fa";
import CastSlider from "../components/detail/CastSlider";
import Loading from "../components/layout/Loading";
import VideoPlayer from "../components/detail/VideoPlayer";

const DetailPage = () => {
  const [showTrailer, setShowTrailer] = useState(false);
  const { movie, loading, fetchSingleMovie, trailer } =
    useContext(MovieContext);
  const { media_type, id } = useParams();

  if (media_type !== "movie" && media_type !== "tv") console.log("hello");
  useEffect(() => {
    fetchSingleMovie(media_type, id);
  }, []);

  if (!loading) {
    return (
      <div className="mx-auto flex flex-col">
        <div
          className="hero min-h-[45rem] bg-base-200"
          style={{
            backgroundImage: `url('https://image.tmdb.org/t/p/w500${movie.backdrop_path}')`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content flex-col lg:flex-row max-w-[90rem]">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold ">
                {movie.title ? movie.title : movie.name}
              </h1>
              <small>
                orginal title:{" "}
                {!movie.original_title
                  ? movie.original_name
                  : movie.original_title}
              </small>
              <div className="flex items-center gap-1 mt-4">
                {movie.genres &&
                  movie.genres.map((genre) => (
                    <span
                      className="btn btn-active btn-sm cursor-auto"
                      key={genre.id}
                    >
                      {genre.name}
                    </span>
                  ))}
              </div>
              <p className="py-6">{movie.overview}</p>
              <div className="flex gap-3 items-center">
                <div className="rounded-full w-14 h-14 bg-accent flex items-center justify-center">
                  {Math.floor(movie.vote_average * 10)}
                  <small className="text-[10px]">%</small>
                </div>
                <button
                  className="btn btn-accent"
                  onClick={() => setShowTrailer(true)}
                >
                  <FaFilm className="mr-2" />
                  Watch Trailer
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <CastSlider media_type={media_type} id={id} />
        </div>
        {showTrailer ? (
          <VideoPlayer url={trailer} setShowTrailer={setShowTrailer} />
        ) : (
          ""
        )}
      </div>
    );
  }
  return (
    <div className="">
      <Loading />
    </div>
  );
};

export default DetailPage;
