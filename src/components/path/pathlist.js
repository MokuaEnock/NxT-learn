import React from "react";
import PathItem from "./pathitem";

function PathList() {
  return (
    <section id="pathlist">
      <div id="listbuttons">
        <button>Your Instructors</button>
        <button>Your Courses</button>
      </div>
      <ul>
        <PathItem />
      </ul>
    </section>
  );
}

export default PathList;
