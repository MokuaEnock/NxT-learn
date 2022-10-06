import React from "react";
import { useNavigate } from "react-router-dom";

function Aside() {
  let navigate = useNavigate();
  return (
    <aside>
      <a>
        <img src=".../assets/" alt="logo" />
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
