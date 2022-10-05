import React from "react";
import Aside from "../courses/Aside";
import PathList from "./pathlist";
import CourseView from "./courseview";

function Path() {
  return (
    <>
      <Aside />
      <PathList />
      <CourseView />
    </>
  );
}

export default Path;
