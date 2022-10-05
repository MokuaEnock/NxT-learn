import React from "react";
import Card from "./CourseCard";

function CourseList({ course }) {
  return (
    <ul id="main_course_list">
      <Card course={course} />
    </ul>
  );
}

export default CourseList;
