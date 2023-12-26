import React from "react";
import star from "../assets/star.svg";
import { BsPlayCircleFill } from "react-icons/bs";

const Card = ({ id, poster, title, rating, genre, adult }) => {
  return (
    <div className="relative bg-black text-white space-y-3 group">
      <img
        className="w-full aspect-[4/6] object-cover object-center"
        src={`https://image.tmdb.org/t/p/w500${poster}`}
        loading="lazy"
        alt=""
      />
      <div className="absolute inset-0 flex items-end group-hover:bg-gradient-to-t from-black via-transparent to-transparent transition duration-150 ease-in-out">
        <BsPlayCircleFill className="h-12 w-12 self-center inset-x-0 mx-auto absolute scale-0 group-hover:scale-100 transition duration-150 ease-in-out opacity-0 group-hover:opacity-100" />
        <div className="m-2 scale-y-0 group-hover:scale-y-100 opacity-0 group-hover:opacity-100 transition duration-150 ease-in-out origin-bottom">
          <div className="flex gap-1 items-center ">
            <img className="h-4" src={star} alt="" />
            <span className="font-semibold text-yellow-400">
              {rating.toFixed(1)}
            </span>
          </div>
          <h3 className="lg:text-lg font-semibold tracking-wide">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
