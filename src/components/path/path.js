import React from "react";
import Aside from "../courses/Aside";
import PathList from "./pathlist";
import CourseView from "./courseview";

function Path() {
  return (
    <section id="path">
      <Aside />
      <PathList />
      <CourseView />
    </section>
  );
}

export default Path;
