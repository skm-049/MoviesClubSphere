import { Link, Navigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Button from "../components/Button";
import axios from "axios";
import Card from "../components/Card";

const getPage = () => {
  let page = JSON.parse(localStorage.getItem("page"));
  return page ? page : 1;
};
const getLoadMore = () => {
  let loadmore = JSON.parse(localStorage.getItem("loadmore"));
  return loadmore ? loadmore : false;
};

const Searched = () => {
  const { query } = useParams();
  const [movies, setMovies] = useState([]);
  const [results, setResults] = useState(null);
  const [page, setPage] = useState(getPage);
  const [loadmore, setLoadMore] = useState(getLoadMore);
  const url = `https://api.themoviedb.org/3/search/movie?api_key=1a7aeb2b21b9660c2a74ad1760ee0a5a&query=${query}&page=${page}`;

  useEffect(() => {
    const fetchMovies = async (url) => {
      const response = await axios.get(url);
      setResults(response.data);
      setMovies([...movies, ...response.data.results]);
    };
    fetchMovies(url);
  }, [page]);

  useEffect(() => {
    const fetchSearch = async (url) => {
      const response = await axios.get(url);
      setResults(response.data);
      setMovies(response.data.results);
    };
    fetchSearch(url);
  }, [query]);

  useEffect(() => {
    localStorage.setItem("page", JSON.stringify(page));
  }, [page]);

  useEffect(() => {
    localStorage.setItem("loadmore", JSON.stringify(loadmore));
  }, [loadmore]);

  return (
    <section className="p-4 space-y-6">
      <InfiniteScroll
        dataLength={movies.length} //This is important field to render the next data
        next={() => setPage((page) => page + 1)}
        hasMore={loadmore}
        loader={
          movies.length === (results && results.total_results) ? (
            <p className="text-center text-sm py-2 capitalize font-medium">
              no more items to show
            </p>
          ) : (
            <h4 className="text-center text-sm py-2">Loading...</h4>
          )
        }
      >
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {movies &&
            movies.map((value, index) => (
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
      {movies.length !== 0 &&
        (results && results.total_results) > 20 &&
        !loadmore && (
          <Button text={"Load More"} onclick={() => setLoadMore(true)} />
        )}
    </section>
  );
};

export default Searched;
