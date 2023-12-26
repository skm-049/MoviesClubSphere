import Home from "./pages/Home";
import NowPlaying from "./pages/NowPlaying";
import Popular from "./pages/Popular";
import TopRated from "./pages/TopRated";
import Trending from "./pages/Trending";
import Upcoming from "./pages/Upcoming";
import Search from "./pages/Search";
import Layout from "./pages/Layout";
import FullDetail from "./pages/FullDetail";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Searched from "./pages/Searched";

const App = () => {
  return (
    <div className="bg-black text-white font-[poppins] min-h-screen">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/now_playing" element={<NowPlaying />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/top_rated" element={<TopRated />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/search" element={<Search />}>
            <Route path="/search/:query" element={<Searched />} />
          </Route>
          <Route path="/movie/:id" element={<FullDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
