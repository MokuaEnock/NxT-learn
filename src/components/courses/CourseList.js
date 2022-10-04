import React, { useEffect } from "react";
import Card from "./CourseCard";

function CourseList() {
  useEffect(() => {
    fetch("http://localhost:8001/database")
      .then((r) => r.json())
      .then((r) => console.log(r));
  }, []);

  return (
    <ul>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </ul>
  );
}

export default CourseList;
