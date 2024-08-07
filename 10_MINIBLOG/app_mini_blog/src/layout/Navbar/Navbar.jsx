import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <h1>Mini BLOG</h1>
      </div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
