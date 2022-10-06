import React from "react";

function ReccomendCourses({ course }) {
  function Item() {
    return (
      <li className="Rec_course_item">
        <div className="course_head">
          <h2>Data Cleaning Essentials.</h2>
          <p>
            <span>10 Modules</span>
            <span>24 Hours</span>
          </p>
        </div>
        <div className="course_body">
          <div>
            <span className="inst_image">
              <img
                src="https://img-c.udemycdn.com/user/100x100/39722184_a55b_2.jpg"
                alt="instructor"
              />
            </span>
            <span className="inst_name">
              <p>Enock Mokua</p>
              <p>Machine Learning</p>
            </span>
          </div>
        </div>
        <button className="course_footer">View</button>
      </li>
    );
  }

  function List() {
    return (
      <ul className="Rec_course_list">
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
