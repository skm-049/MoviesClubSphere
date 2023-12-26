import axios from "axios";
import React, { useEffect, useState } from "react";
import useFetch from "../pages/useFetch";
import Card from "./Card";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsPlayCircleFill } from "react-icons/bs";

const PopularSlide = () => {
  const [movies, setMovies] = useState([]);
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=1a7aeb2b21b9660c2a74ad1760ee0a5a&language=en-US`;
  const imgurl = "https://image.tmdb.org/t/p/w500";
  const fetchData = async () => {
    const response = await axios.get(url);
    console.log(response.data);
    setMovies(response.data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h3 className="capitalize font-semibold text-lg md:text-xl lg:text-2xl mb-4 ">
        popular movies
      </h3>
      <Swiper
        spaceBetween={16}
        slidesPerView={2}
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
                <div className="relative group">
                  <div className="inset-0 bg-transparent absolute flex items-center justify-center transition duration-150 ease-in-out group-hover:bg-black/30 ">
                    <BsPlayCircleFill className="h-12 w-12  scale-0 group-hover:scale-100 transition duration-150 ease-in-out" />
                  </div>
                  <img src={`${imgurl}${value.poster_path}`} alt="" />
                </div>
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default PopularSlide;
