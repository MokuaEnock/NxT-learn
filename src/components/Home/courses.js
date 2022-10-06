import React from "react";

function ReccomendCourses({ course }) {
  let course1 = course.slice(0, 4);

  let newCourse = course1.map((element) => {
    return (
      <li className="Rec_course_item" key={element.id}>
        <div className="course_head">
          <h2>{element.title}</h2>
          <p>
            <span>{element.price}</span>
            <span>24 Hours</span>
          </p>
        </div>
        <div className="course_body">
          <div>
            <span className="inst_image">
              <img
                src={element.visible_instructors[0].image_100x100}
                alt="instructor"
              />
            </span>
            <span className="inst_name">
              <p className="a">
                {" "}
                {element.visible_instructors[0].display_name}{" "}
              </p>
              <p className="b"> {element.visible_instructors[0].job_title} </p>
            </span>
          </div>
        </div>
        <button className="course_footer">Add to Path</button>
      </li>
    );
  });

  function List() {
    return <ul className="Rec_course_list">{newCourse}</ul>;
  }

  return (
    <>
      <h2>Top Courses</h2>
      <List />
    </>
  );
}

export default ReccomendCourses;
