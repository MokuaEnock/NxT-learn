import React, { useState, useEffect } from "react";
import CourseList from "./CourseList";
import Aside from "./Aside";
import Description from "./Description";
function Courses() {
  let [course, setCourse] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8001/database")
      .then((r) => r.json())
      .then((r) => setCourse(r));
  }, []);

  return (
    <section id="course">
      <Aside />
      <CourseList course={course} />
      <Description course={course} />
    </section>
  );
}
export default Courses;
