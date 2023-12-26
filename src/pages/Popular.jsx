import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import useFetch from "./useFetch";
import InfiniteScroll from "react-infinite-scroll-component";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const getPage = () => {
  let page = JSON.parse(localStorage.getItem("page"));
  return page ? page : 1;
};
const getLoadMore = () => {
  let loadmore = JSON.parse(localStorage.getItem("loadmore"));
  if (loadmore == null) {
    return false;
  } else {
    return loadmore;
  }
};

const Popular = () => {
  const [page, setPage] = useState(getPage);
  const [loadmore, setLoadMore] = useState(getLoadMore);
  let url = `https://api.themoviedb.org/3/movie/popular?api_key=1a7aeb2b21b9660c2a74ad1760ee0a5a&language=en-US&page=${page}`;

  const [movies, movieList] = useFetch(url, page);

  useEffect(() => {
    localStorage.setItem("page", JSON.stringify(page));
  }, [page]);

  useEffect(() => {
    localStorage.setItem("loadmore", JSON.stringify(loadmore));
  }, [loadmore]);

  return (
    <section className="p-4 space-y-6">
      <h3 className="text-lg tracking-wider uppercase font-semibold md:text-xl lg:text-2xl border-b-[3px] border-red-600 w-fit pb-1">
        popular movies
      </h3>
      <InfiniteScroll
        dataLength={movieList.length} //This is important field to render the next data
        next={() => setPage((page) => page + 1)}
        hasMore={loadmore}
        loader={<h4>Loading...</h4>}
      >
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {movieList &&
            movieList.map((value, index) => (
              <Link to={`/movie/${value.id}`} key={index}>
                <Card
                  id={value.id}
                  poster={value.poster_path}
                  genre={value.genre_ids}
                  rating={value.vote_average}
                  title={value.title}
                />
              </Link>
            ))}
        </div>
      </InfiniteScroll>
      {movieList.length !== 0 && !loadmore && (
        <Button
          text={"Load More"}
          onclick={() => setLoadMore((loadmore) => !loadmore)}
        />
      )}
    </section>
  );
};

export default Popular;
