import React from "react";

function CourseList({ course }) {
 
  let newCourse = course.map((element) => {
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
              <p> {element.visible_instructors[0].display_name} </p>
              <p> {element.visible_instructors[0].job_title} </p>
            </span>
          </div>
        </div>
        <button className="course_footer">View</button>
      </li>
    );
  });

  return <ul id="main_course_list">{newCourse}</ul>;
}

export default CourseList;
