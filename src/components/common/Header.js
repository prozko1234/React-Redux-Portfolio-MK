import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="nav-container">
      <NavLink className="nav-logo" to="/" exact>
        Mykola Marchuk
      </NavLink>
      <div className="nav-menu">
        <NavLink to="/" className="" exact>
          Home
        </NavLink>
        <NavLink to="/about" className="">
          About
        </NavLink>
        <NavLink to="/projects" className="">
          Projects
        </NavLink>
        <NavLink to="/contact" className="">
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
