import React, { useEffect, useState } from "react";
import CourseList from "./CourseList";
import Aside from "./Aside";
import Description from "./Description";

function Courses() {
  let [course, setCourse] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/database")
      .then((r) => r.json())
      .then((r) => setCourse(r));
  }, []);

  let allInstructors = course.map((el) => {
    let element = el.visible_instructors[0];
    return {
      id: element.id,
      title: element.title,
      name: element.name,
      job_title: element.job_title,
      display_name: element.display_name,
      image_100x100: element.image_100x100,
      course_title: el.title,
      course_is_paid: el.is_paid,
      course_headline: el.headline,
      course_price: el.price,
      course_image_480x270: el.image_480x270,
    };
  });

  console.log("all instructors", allInstructors);
  return (
    <section id="course">
      <Aside />
      <CourseList course={course} />
      <Description course={course} />
    </section>
  );
}
export default Courses;
