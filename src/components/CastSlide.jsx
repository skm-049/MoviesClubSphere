import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import placeholder from "../assets/placeholder.jpeg";
import { Mousewheel } from "swiper";

const CastSlide = ({ cast }) => {
  const imgurl = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="p-4 py-6 space-y-4">
      <h3 className="text-lg tracking-wider uppercase font-semibold md:text-xl lg:text-2xl border-b-[3px] border-red-600 w-fit pb-1">
        casts
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
        modules={[Mousewheel]}
        mousewheel={true}
      >
        {cast &&
          cast.map((value) => (
            <SwiperSlide key={value.id}>
              <div>
                {value.profile_path ? (
                  <img
                    className="aspect-[4/5] object-cover object-center"
                    src={`${imgurl}${value.profile_path}`}
                    alt=""
                  />
                ) : (
                  <img
                    className="aspect-[4/5] object-cover object-center"
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

export default CastSlide;
