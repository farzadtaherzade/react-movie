// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { useContext, useEffect } from "react";
import MovieContext from "../../context/home/MovieContext";
import CastCard from "./CastCard";

function HeroSlider({ media_type, id }) {
  const { fetchCasts, casts } = useContext(MovieContext);
  useEffect(() => {
    fetchCasts(media_type, id);
  }, []);
  return (
    <div>
      <Swiper
        spaceBetween={70}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
      >
        {casts.map((cast) => (
          <SwiperSlide key={cast.id}>
            <CastCard cast={cast} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HeroSlider;
