import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
function App() {
  return (
    <Routes>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="container m-auto px-4">
          <Routes>
            <Route to="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Routes>
  );
}

export default App;
