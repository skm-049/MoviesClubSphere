import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card from "./Card";
import { Link } from "react-router-dom";
import { Mousewheel } from "swiper";

const Slides = ({ movies, title }) => {
  return (
    <div className="px-4 py-6 space-y-8">
      <h3 className="text-lg tracking-wider uppercase font-semibold md:text-xl lg:text-2xl border-b-[3px] border-red-600 w-fit pb-1">
        {title}
      </h3>
      <Swiper
        spaceBetween={16}
        slidesPerView={2}
        mousewheel={true}
        modules={[Mousewheel]}
        breakpoints={{
          600: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
      >
        {movies &&
          movies.map((value, index) => (
            <SwiperSlide key={index}>
              <Link to={`/movie/${value.id}`}>
                <Card
                  id={value.id}
                  poster={value.poster_path}
                  genre={value.genre_ids}
                  rating={value.vote_average}
                  title={value.title}
                />
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Slides;
