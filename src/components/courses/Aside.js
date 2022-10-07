import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function Aside() {
  return (
    <aside>
      <a>
        <img src={logo} alt="logo" />
      </a>
      <nav>
        <a href="/home">Home</a>
        <a href="/courses">Courses</a>
        <a href="/instructor">Instructors</a>
        <a href="/path">Your Path</a>
        <a href="/">Logout</a>
      </nav>
    </aside>
  );
}

export default Aside;
