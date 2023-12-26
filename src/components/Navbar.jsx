import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import logo from "/logo-trans.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const navlinks = [
    {
      id: 1,
      path: "/search",
      link: "search",
    },
    {
      id: 2,
      path: "/now_playing",
      link: "now playing",
    },
    {
      id: 3,
      path: "/popular",
      link: "popular",
    },
    {
      id: 4,
      path: "/top_rated",
      link: "top rated",
    },
    {
      id: 5,
      path: "/upcoming",
      link: "upcoming",
    },
    {
      id: 6,
      path: "/trending",
      link: "trending",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${query}`);
    setQuery("");
  };

  return (
    <header className="flex py-5 md:px-12 md:gap-6 px-4 items-center sticky top-0 z-50 bg-black w-full gap-3 justify-between">
      <Link to="/">
        <img className="mylogo" src={logo} alt="" />
      </Link>
      <ul className="hidden md:flex capitalize font-semibold text-white/90 gap-6">
        {navlinks.map((value) => (
          <li key={value.id}>
            <NavLink
              className="hover:text-red_primary transition-colors"
              to={value.path}
              onClick={() => localStorage.clear()}
            >
              {value.link}
            </NavLink>
          </li>
        ))}
      </ul>

      {/*  */}
      <button
        className="text-2xl z-40 md:hidden text-red_primary "
        onClick={() => setNav(!nav)}
      >
        {nav ? <IoMdClose /> : <RxHamburgerMenu />}
      </button>

      {/* hamburger */}
      <ul
        className={`bg-black h-screen absolute inset-y-0 py-8 px-12 gap-8 font-semibold tracking-widest flex-col w-full flex justify-center text-xl md:hidden uppercase duration-300 ease-in-out z-30 ${
          nav ? "left-0" : "-left-full"
        }`}
      >
        {navlinks.map((value) => (
          <li key={value.id}>
            <NavLink
              to={value.path}
              onClick={() => {
                localStorage.clear();
                setNav(false);
              }}
            >
              {value.link}
            </NavLink>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Navbar;
