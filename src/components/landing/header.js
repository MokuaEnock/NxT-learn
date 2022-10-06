import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <a>
        NxT<strong>Learn</strong>.
      </a>
      
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </nav>
    </header>
  );
}

export default Header;
