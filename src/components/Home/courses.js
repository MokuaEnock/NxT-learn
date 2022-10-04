import React from "react";

function ReccomendCourses() {
  function Item() {
    return (
      <li className="Rec_course_item">

      </li>
    );
  }

  function List() {
    return (
      <ul className="Rec_course_list">
        <Item />
        <Item />
        <Item />
        <Item />
      </ul>
    );
  }

  return (
    <>
      <h2>Top Courses</h2>
      <List />
    </>
  );
}

export default ReccomendCourses;
