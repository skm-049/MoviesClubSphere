import React from "react";

const Button = ({ text, onclick }) => {
  return (
    <button
      className="block mx-auto mt-4 text-sm font-semibold py-2 px-4 rounded text-red_primary tracking-wide hover:scale-95 transition lg:rounded-md border-[1.5px] uppercase border-red_primary"
      onClick={onclick}
    >
      {text}
    </button>
  );
};

export default Button;
