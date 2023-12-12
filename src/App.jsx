import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimeDisplay } from "./pages/AnimeDisplay";
import { AnimeList } from "./components/AnimeList";
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<AnimeList />} />
          <Route path="/anime/:animeID" element={<AnimeDisplay />} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
