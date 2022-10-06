import React from "react";
import CourseList from "./CourseList";
import Aside from "./Aside";
import Description from "./Description";
function Courses({course}) {


  return (
    <section id="course">
      <Aside />
      <CourseList course={course} />
      <Description course={course} />
    </section>
  );
}
export default Courses;
