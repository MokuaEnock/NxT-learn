import React, { useEffect, useState } from "react";
import CourseList from "./CourseList";
import Aside from "./Aside";
import Description from "./Description";

function Courses() {
  let [course, setCourse] = useState([]);

  useEffect(() => {
    fetch("https://nxt-learn-database.herokuapp.com/database")
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
