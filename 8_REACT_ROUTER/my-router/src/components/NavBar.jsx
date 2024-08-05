import { NavLink } from "react-router-dom";

import "../assets/styles/NavBar.sass";

const NavBar = () => {
  return (
    <nav className="nav-container">
      <h1>Meu app</h1>

      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
