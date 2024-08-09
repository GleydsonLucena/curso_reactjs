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
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthContextProvider>
        <UserContextProvider>
          <UtilsContextProvider>
            <BrowserRouter>
              <Navbar />
              <Container customClass="min-height center">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/about" element={<About />} />
                </Routes>
              </Container>
              <Footer />
            </BrowserRouter>
          </UtilsContextProvider>
        </UserContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
