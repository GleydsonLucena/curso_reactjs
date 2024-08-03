import { Link } from "react-router-dom";

import "../assets/styles/NavBar.sass";

const NavBar = () => {
  return (
    <nav className="nav-container">
      <h1>Meu app</h1>

      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default NavBar;
