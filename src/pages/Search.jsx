import { Outlet, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${text}`);
    setText("");
  };

  return (
    <section className="p-4 space-y-6">
      <form className="relative max-w-md mx-auto" onSubmit={handleSubmit}>
        <input
          className=" border w-full rounded-md py-2 px-4 border-stone-700 bg-transparent placeholder:text-stone-500 hover:border-stone-500 focus:border-stone-500 outline-none focus:ring-2 text-stone-400 ring-stone-700"
          type="text"
          placeholder="Search Movies"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="absolute inset-y-0 right-0 mr-2 text-xl text-stone-500"
          type="submit"
        >
          <BiSearch />
        </button>
      </form>
      <Outlet />
    </section>
  );
};

export default Search;
