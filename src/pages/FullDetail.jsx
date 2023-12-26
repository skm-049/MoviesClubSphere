import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAsyncValue, useParams } from "react-router-dom";
import star from "../assets/star.svg";
import CastSlide from "../components/CastSlide";
import { dateFormat, toHoursAndMinutes } from "../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";
import Slides from "../components/Slides";
import Footer from "../components/Footer";

const VideoSlide = ({ videos }) => {
  return (
    <div className="p-4 py-6 space-y-4">
      <h3 className="text-lg tracking-wider uppercase font-semibold md:text-xl lg:text-2xl border-b-[3px] border-red-600 w-fit pb-1">
        videos
      </h3>
      <Swiper
        spaceBetween={16}
        slidesPerView={1}
        navigation={true}
        modules={[Navigation]}
      >
        {videos &&
          videos.map((value, index) => (
            <SwiperSlide key={index}>
              <iframe
                className="aspect-video h-auto w-full"
                src={`https://www.youtube.com/embed/${value.key}`}
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope;"
                allowFullScreen
              ></iframe>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

const Backdrops = ({ backdrops }) => {
  return (
    <div className="p-4 py-6 space-y-4">
      <h3 className="text-lg tracking-wider uppercase font-semibold md:text-xl lg:text-2xl border-b-[3px] border-red-600 w-fit pb-1">
        backdrops
      </h3>
      <Swiper
        className="pb-8"
        spaceBetween={16}
        slidesPerView={1}
        navigation={true}
        pagination={{ dynamicBullets: true }}
        modules={[Navigation, Pagination]}
      >
        {backdrops &&
          backdrops.map((value, index) => (
            <SwiperSlide key={index}>
              <img src={`${imgurl}${value.file_path}`} alt="" />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};
const Posters = ({ posters }) => {
  return (
    <div className="p-4 py-6 space-y-4">
      <h3 className="text-lg tracking-wider uppercase font-semibold md:text-xl lg:text-2xl border-b-[3px] border-red-600 w-fit pb-1">
        posters
      </h3>
      <Swiper
        className="pb-8"
        breakpoints={{
          600: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ dynamicBullets: true }}
        modules={[Pagination]}
      >
        {posters &&
          posters.map((value, index) => (
            <SwiperSlide key={index}>
              <img loading="lazy" src={`${imgurl}${value.file_path}`} alt="" />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

const imgurl = "https://image.tmdb.org/t/p/original";

const FullDetail = () => {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  const fetchData = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=1a7aeb2b21b9660c2a74ad1760ee0a5a&append_to_response=videos,credits,images,similar,recommendations`
    );
    console.log(response.data);
    setMovie(response.data);
  };

  useEffect(() => {
    fetchData();
    window.scrollTo(0, 0);
  }, [id]);
  return (
    <section className=" relative bg-black">
      {movie.length !== 0 && (
        // {/* Movie Container */}
        <div className="px-4 md:px-6 lg:px-12 py-8 flex flex-col md:flex-row bg-gradient-to-tr from-black gap-12 isolate relative h-fit z-10 items-center overflow-hidden">
          {/* backdrop */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-black"></div>
            <img
              className="h-full w-full object-cover object-center"
              src={`${imgurl}${movie.backdrop_path}`}
              alt=""
            />
          </div>
          {/* poster */}
          <img
            className="w-full sm:max-w-sm relative"
            src={`${imgurl}${movie.poster_path}`}
            alt=""
          />
          {/* details */}
          <div className="space-y-2 flex flex-col relative">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              {movie.title}
            </h3>
            {/* tagline */}
            <p className="text-base font-medium text-white/90 lg:text-lg">
              {movie.tagline}
            </p>
            <p className="text-sm font-medium">
              {dateFormat(movie.release_date)}
            </p>
            <p className="font-medium">{toHoursAndMinutes(movie.runtime)}</p>
            {/* genres */}
            <div className="flex gap-2 flex-wrap">
              {movie.genres &&
                movie.genres.map((genre) => (
                  <p
                    className="py-1 px-3 bg-red_primary text-white rounded-full w-fit md:text-sm font-semibold text-xs"
                    key={genre.id}
                  >
                    {genre.name}
                  </p>
                ))}
            </div>
            {/* rating */}
            <div className="flex gap-2 items-center ">
              <img className="h-6" src={star} alt="" />
              <span className="font-semibold text-yellow-500  text-2xl">
                {movie.vote_average && movie.vote_average.toFixed(1)}
                <span className="text-white/70 font-medium ml-4 text-lg">
                  ({movie.vote_count} votes)
                </span>
              </span>
            </div>
            {/* overview */}
            <div>
              <p className="text-lg capitalize font-medium">overview :</p>
              <p className="text-white/80 max-w-lg">{movie.overview}</p>
            </div>
          </div>
        </div>
      )}
      <CastSlide cast={movie.length !== 0 && movie.credits.cast} />
      <VideoSlide videos={movie.length !== 0 && movie.videos.results} />
      <Backdrops backdrops={movie.length !== 0 && movie.images.backdrops} />
      <Posters posters={movie.length !== 0 && movie.images.posters} />
      {/* similar */}
      <Slides
        movies={movie.length !== 0 && movie.similar.results}
        title="similar movies"
      />
      {/* recommendations */}
      <Slides
        movies={movie.length !== 0 && movie.recommendations.results}
        title="recommendations"
      />
      <Footer />
    </section>
  );
};

export default FullDetail;
