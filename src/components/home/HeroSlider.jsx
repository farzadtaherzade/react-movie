import React, { useState, useEffect } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import axios from "axios";
import { Link } from "react-router-dom";

function HeroSlider() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const moviesres = await axios(
      `/movie/popular?api_key=${import.meta.env.VITE_TMDB_TOKEN}`
    );
    const moviesData = moviesres.data;
    setMovies(moviesData.results.slice(0, 5));
  };
  return (
    <div>
      <Swiper spaceBetween={100} slidesPerView={1}>
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div
              className="hero h-[29rem] rounded-3xl bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('https://image.tmdb.org/t/p/w500${movie.backdrop_path}')`,
              }}
            >
              <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
              <div className="hero-content flex-col lg:flex-row-reverse">
                <div>
                  <h1 className="text-5xl font-bold">{movie.title}</h1>
                  <p className="py-6 max-w-3xl">{movie.overview}</p>
                  <Link to={`/movie/${movie.id}`} className="btn btn-primary">
                    Whatch Now
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HeroSlider;
