import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Movies from "./pages/Movies";
import { MovieProvider } from "./context/home/MovieContext";
import Tvs from "./pages/Tvs";
import DetailPage from "./pages/DetailPage";
import Search from "./pages/Search";

function App() {
  return (
    <MovieProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />

          <main className="container mx-auto px-4 mt-28">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/tvs" element={<Tvs />} />
              <Route path="/search" element={<Search />} />
              <Route path="/:media_type/:id" element={<DetailPage />} />
              <Route path="/notFound" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </Router>
    </MovieProvider>
  );
}

export default App;
