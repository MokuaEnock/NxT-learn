import React from "react";
import CourseList from "./CourseList";
import Aside from "./Aside";
import Description from "./Description";
function Courses() {
  return (
    <section id="course">
      <Aside />
      <CourseList />
      <Description />
    </section>
  );
}
export default Courses;
