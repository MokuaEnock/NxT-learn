import React from "react";
import { ReactDOM } from "react";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <NavLink to="/home" exact>
        Home
      </NavLink>

      <NavLink to="/courses" exact>
        Courses
      </NavLink>

      <NavLink to="/jobs" exact>
        Jobs
      </NavLink>

      <NavLink to="/about" exact>
        About
      </NavLink>

      <NavLink to="/contact_us" exact>
        Contact Us
      </NavLink>
    </div>
  );
}

export default NavBar;
