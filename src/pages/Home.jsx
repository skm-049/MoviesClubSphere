import axios from "axios";
import React, { useEffect, useState } from "react";
import Slides from "../components/Slides";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import star from "../assets/star.svg";
import { dateFormat, toHoursAndMinutes } from "../constants";
import { Link } from "react-router-dom";
import { BsFillPlayFill } from "react-icons/bs";
import { Autoplay } from "swiper";
import Footer from "../components/Footer";

const LargeSlide = ({ trendingMovies }) => {
  return (
    <Swiper
      loop={true}
      modules={[Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      {trendingMovies.map((value, index) => (
        <SwiperSlide key={index}>
          <div
            class={`relative h-screen flex items-center bg-cover bg-center px-4 py-12 md:py-16 lg:py-20 text-white sm:px-6 md:px-8 lg:px-14`}
            style={{ backgroundImage: `url(${imgurl}${value.backdrop_path})` }}
          >
            <div class="relative space-y-4 z-10">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {value.title}
              </h3>
              <p className="mb-3 font-medium">
                {dateFormat(value.release_date)}
              </p>
              <div className="flex gap-2 items-center mb-4">
                <img className="h-6" src={star} alt="" />
                <span className="font-semibold text-yellow-500  text-2xl">
                  {value.vote_average && value.vote_average.toFixed(1)}
                  <span className="text-white/70 font-medium ml-4 text-lg">
                    ({value.vote_count} votes)
                  </span>
                </span>
              </div>
              <Link to={`/movie/${value.id}`}>
                <button className="text-white py-2 px-5 rounded-full bg-red_primary capitalize font-semibold mt-4">
                  watch now <BsFillPlayFill className="inline text-xl" />
                </button>
              </Link>
              <div>
                <p class="text-lg font-medium capitalize">overview :</p>
                <p class="w-full text-white/90 md:max-w-md line-clamp-5">
                  {value.overview}
                </p>
              </div>
            </div>
            <div class="absolute inset-0 h-full w-full bg-gradient-to-tr from-black"></div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const imgurl = "https://image.tmdb.org/t/p/original";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState(null);
  const [topRatedMovies, setTopRatedMovies] = useState(null);
  const [nowPlayingMovies, setNowPlayingMovies] = useState(null);
  const [trendingMovies, setTrendingMovies] = useState(null);

  const popularMovies_url =
    "https://api.themoviedb.org/3/movie/popular?api_key=1a7aeb2b21b9660c2a74ad1760ee0a5a&language=en-US";
  const topRatedMovies_url =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=1a7aeb2b21b9660c2a74ad1760ee0a5a&language=en-US";
  const upcomingMovies_url =
    "https://api.themoviedb.org/3/movie/upcoming?api_key=1a7aeb2b21b9660c2a74ad1760ee0a5a&language=en-US";
  const trendingMovies_url =
    "https://api.themoviedb.org/3/trending/movie/day?api_key=1a7aeb2b21b9660c2a74ad1760ee0a5a";
  const fetchData1 = async () => {
    const response = await axios.get(popularMovies_url);
    setPopularMovies(response.data.results);
  };
  const fetchData2 = async () => {
    const response = await axios.get(topRatedMovies_url);
    setTopRatedMovies(response.data.results);
  };
  const fetchData3 = async () => {
    const response = await axios.get(upcomingMovies_url);
    setNowPlayingMovies(response.data.results);
  };
  const fetchTrending = async () => {
    const response = await axios.get(trendingMovies_url);
    setTrendingMovies(response.data.results);
    console.log(response.data.results);
  };

  useEffect(() => {
    fetchData1();
    fetchData2();
    fetchData3();
    fetchTrending();
  }, []);

  return (
    <div className="">
      {trendingMovies && <LargeSlide trendingMovies={trendingMovies} />}
      {popularMovies && (
        <Slides movies={popularMovies} title="popular movies" />
      )}
      {topRatedMovies && (
        <Slides movies={topRatedMovies} title="top rated movies" />
      )}
      {nowPlayingMovies && (
        <Slides movies={nowPlayingMovies} title="now playing" />
      )}
      <Footer />
    </div>
  );
};

export default Home;
