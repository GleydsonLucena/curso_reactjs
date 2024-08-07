import { Link, NavLink } from "react-router-dom";

import Container from "../../layout/Container/Container";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Container>
        <h1>
          <Link to="/">
            Mini <span>Blog</span>
          </Link>
        </h1>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
          <li>
            <NavLink to="/about">Sobre</NavLink>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default Navbar;
