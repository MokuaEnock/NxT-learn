import React from "react";
import Card from "./CourseCard";

function CourseList({ course }) {
  return (
    <ul>
      <Card course={course} />
    </ul>
  );
}

export default CourseList;
