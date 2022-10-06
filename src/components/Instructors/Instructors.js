import React, { useEffect, useState } from "react";
import Aside from "../courses/Aside";
import InstructorDescription from "./InstructorDescription";
import InstructorList from "./InstructorsList";

function Instructor() {
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

  console.log("all istructors asap", allInstructors);
  return (
    <section id="instructor">
      <Aside />
      <InstructorList instructor={allInstructors} />
      <InstructorDescription instructor={allInstructors} />
    </section>
  );
}

export default Instructor;
