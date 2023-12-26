import React from "react";

const PopularList = () => {
  const [movie, setMovie] = useState([]);
  let url =
    "https://api.themoviedb.org/3/movie/popular?api_key=1a7aeb2b21b9660c2a74ad1760ee0a5a&language=en-US&page=1";

  const fetchData = async () => {
    const response = await axios.get(url);
    // setItem(response.data.genres);
    console.log(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return <div>PopularList</div>;
};

export default PopularList;
