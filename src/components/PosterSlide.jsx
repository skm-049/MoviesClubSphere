import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import placeholder from "../assets/placeholder.jpeg";

const PosterSlide = ({ posters }) => {
  const imgurl = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="px-4 w-full">
      <h3 className="capitalize font-semibold text-xl md:text-2xl lg:text-3xl mb-4">
        Casts
      </h3>
      <Swiper
        breakpoints={{
          600: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 6,
          },
        }}
        spaceBetween={16}
        slidesPerView={2}
      >
        {cast &&
          cast.map((value) => (
            <SwiperSlide key={value.id}>
              <div>
                {value.profile_path ? (
                  <img src={`${imgurl}${value.profile_path}`} alt="" />
                ) : (
                  <img
                    className="aspect-[4/6] object-cover object-center"
                    src={placeholder}
                    alt=""
                  />
                )}

                <h4 className="font-medium">{value.name}</h4>
                <p className="text-sm text-white/80">{value.character}</p>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default PosterSlide;
