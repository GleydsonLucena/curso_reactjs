import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Mais from "./pages/Mais";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mais" element={<Mais />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
