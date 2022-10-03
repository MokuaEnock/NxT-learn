import React from "react";
import Aside from "../courses/Aside";
import ReccomendCourses from "./courses";
import ReccomendInsts from "./insts";

function Home() {
  return (
    <section id="home">
      <Aside />
      <h2>Top Instructors</h2>
      <ReccomendInsts />
      <h2>Top courses</h2>
      <ReccomendCourses />
    </section>
  );
}

export default Home;
