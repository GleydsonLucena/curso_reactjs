import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";

import Container from "./layout/Container/Container";
import Navbar from "./layout/Navbar/Navbar";
import Footer from "./layout/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
