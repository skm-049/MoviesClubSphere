import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen w-full flex items-center flex-col gap-3 justify-center">
      <h3 className="text-4xl md:text-6xl lg:text-8xl font-bold">404</h3>
      <p className="capitalize font-medium">page not found</p>
      <Link to={"/"}>
        <button className="text-black font-bold bg-red py-2 px-4 rounded-md capitalize">
          go to homepage
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
