import React from "react";

function ReccomendCourses() {
  function Item() {
    return <li className="Rec_course_item"></li>;
  }

  function List() {
    return (
      <ul className="Rec_course_list">
        <Item />
      </ul>
    );
  }

  return <List />;
}

export default ReccomendCourses;
