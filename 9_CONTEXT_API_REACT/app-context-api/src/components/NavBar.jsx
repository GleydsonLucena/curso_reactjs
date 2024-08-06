import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav">
      <h1>Meu APP</h1>
      <ul>
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/about">
          <li>About</li>
        </NavLink>
        <NavLink to="/mais">
          <li>Mais</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default NavBar;
