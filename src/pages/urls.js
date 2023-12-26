let movie_id = 505642;
let getMovie =
  "https://api.themoviedb.org/3/movie/{movie_id}?api_key=1a7aeb2b21b9660c2a74ad1760ee0a5a&language=en-US";

let getMovieWithImage =
  "https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=1a7aeb2b21b9660c2a74ad1760ee0a5a&language=en-US";

let getKeywords =
  "https://api.themoviedb.org/3/movie/{movie_id}/keywords?api_key=1a7aeb2b21b9660c2a74ad1760ee0a5a";

let recommendation =
  "https://api.themoviedb.org/3/movie/{movie_id}/recommendations?api_key=1a7aeb2b21b9660c2a74ad1760ee0a5a&language=en-US&page=1";

let reviews =
  "https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=1a7aeb2b21b9660c2a74ad1760ee0a5a&language=en-US&page=1";

let similarMovie =
  "https://api.themoviedb.org/3/movie/{movie_id}/similar?api_key=1a7aeb2b21b9660c2a74ad1760ee0a5a&language=en-US&page=1";

let watchProvider =
  "https://api.themoviedb.org/3/movie/{movie_id}/watch/providers?api_key=1a7aeb2b21b9660c2a74ad1760ee0a5a";

let latest =
  "https://api.themoviedb.org/3/movie/latest?api_key=1a7aeb2b21b9660c2a74ad1760ee0a5a&language=en-US";

let nowPlaying =
  "https://api.themoviedb.org/3/movie/now_playing?api_key=1a7aeb2b21b9660c2a74ad1760ee0a5a&language=en-US&page=1";

let popular =
  "https://api.themoviedb.org/3/movie/popular?api_key=1a7aeb2b21b9660c2a74ad1760ee0a5a&language=en-US&page=1";

let topRated =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=1a7aeb2b21b9660c2a74ad1760ee0a5a&language=en-US&page=1";

let upcoming =
  "https://api.themoviedb.org/3/movie/upcoming?api_key=1a7aeb2b21b9660c2a74ad1760ee0a5a&language=en-US&page=1";

let tranding =
  "https://api.themoviedb.org/3/trending/all/day?api_key=1a7aeb2b21b9660c2a74ad1760ee0a5a";

let searchMovie =
  "https://api.themoviedb.org/3/search/movie?api_key=1a7aeb2b21b9660c2a74ad1760ee0a5a&language=en-US&query=query&page=1&include_adult=false";

let searchSeries =
  "https://api.themoviedb.org/3/search/tv?api_key=1a7aeb2b21b9660c2a74ad1760ee0a5a&language=en-US&page=1&query=search&include_adult=false";

export {};
