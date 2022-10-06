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
        <a>Home</a>
        <a>Courses</a>
        <a>Instructors</a>
        <a>Your Path</a>
        <a onClick={navigate("/")}>Logout</a>
      </nav>
    </aside>
  );
}

export default Aside;
