import React from "react";
import logo from "/logo-trans.png";

const Footer = () => {
  return (
    <footer className="flex w-full h-auto flex-col items-center gap-2 px-4 py-3 border-t border-white/20">
      <img className="mylogo" src={logo} alt="" />
      <p className="text-sm text-stone-400 font-medium">
        &copy; copyright 2023 @moviesclubsphere All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
