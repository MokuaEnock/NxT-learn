import React from "react";
import Aside from "../courses/Aside";
import InstructorDescription from "./InstructorDescription";
import InstructorList from "./InstructorsList";

function Instructor() {
  return (
    <section id="instructor">
      <Aside />
      <InstructorList />
      <InstructorDescription />
    </section>
  );
}

export default Instructor;
