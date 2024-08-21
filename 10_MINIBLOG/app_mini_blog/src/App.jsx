import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import CreatePost from "./pages/CreatePost/CreatePost";
import Dashbord from "./pages/Dashbord/Dashbord";
import NotFound from "./pages/NotFound/NotFound";

import Container from "./layout/Container/Container";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import { UserContextProvider } from "./context/UserContext";

import { AuthContextProvider } from "./context/AuthContext";

import { useAutentication } from "./hooks/useAutentication";
import { onAuthStateChanged } from "firebase/auth";
import Search from "./pages/Search/Search";
import Post from "./pages/Post/Post";

function App() {
  const [user, setUser] = useState();
  const { auth } = useAutentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <AuthContextProvider value={{ user }}>
        <BrowserRouter>
          <Navbar />
          <Container customClass="min-height center">
            <UserContextProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/posts/:id" element={<Post />} />
                <Route path="/about" element={<About />} />
                <Route
                  path="/login"
                  element={!user ? <Login /> : <Navigate to="/" />}
                />
                <Route
                  path="/register"
                  element={!user ? <Register /> : <Navigate to="/" />}
                />
                <Route
                  path="/posts/create"
                  element={user ? <CreatePost /> : <Navigate to="/login" />}
                />
                <Route
                  path="/dashbord"
                  element={user ? <Dashbord /> : <Navigate to="/login" />}
                />

                <Route path="*" element={<NotFound />} />
              </Routes>
            </UserContextProvider>
          </Container>
          <Footer />
        </BrowserRouter>
      </AuthContextProvider>
    </>
  );
}

export default App;
