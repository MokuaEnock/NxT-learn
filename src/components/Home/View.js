import React, { useEffect, useState } from "react";
import ReccomendCourses from "./courses";
import ReccomendInsts from "./insts";

function View() {
  let [course, setCourse] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/database")
      .then((r) => r.json())
      .then((c) => setCourse(c));
  }, []);

  return (
    <section>
      <ReccomendCourses course={course} />
      <ReccomendInsts course={course} />
    </section>
  );
}

export default View;
