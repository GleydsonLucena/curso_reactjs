import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

import Container from "./layout/Container/Container";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import { UserContextProvider } from "./context/UserContext";
import { UtilsContextProvider } from "./context/UtilsContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Container customClass="min-height center">
          <UserContextProvider>
            <UtilsContextProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </UtilsContextProvider>
          </UserContextProvider>
        </Container>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
