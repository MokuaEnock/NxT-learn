import React from "react";

function InstructorDescription({ course, instructors, allInstructors }) {
  function Heading() {
    return (
      <div className="desc_inst">
        <div className="desc_inst_img">
          <img
            src="https://img-c.udemycdn.com/user/100x100/76984888_7658_2.jpg"
            alt="headshot"
          />
        </div>
        <div className="desc_inst_info">
          <h4>Enock Mokua</h4>
          <p>Machine Learning Engineer</p>
        </div>
      </div>
    );
  }

  function Details() {
    return (
      <p className="instructor_details">
        A senior machine learning engineer at deloitte with 5 years of
        experience and 7 years of instruction at University of Kent.
      </p>
    );
  }

  let instList = instructors.map((e) => {
    return (
      <li className="instdescitem" key={e.course_id}>
        <div className="instdescitem1">
          <img src={e.image_480x270} alt="course" />
        </div>
        <div className="instdescitem2">
          <span>{e.title}</span>
          <div>
            <span>Rating: {Math.round(e.rating * 100) / 100}</span>
            <span>Enrolled:{e.num_reviews}</span>
            <span>Lectures: {e.num_published_lectures}</span>
            <a href={`www.udemy.com${e.url}`} target="_blank" rel="noreferrer">
              Start
            </a>
          </div>
        </div>
      </li>
    );
  });

  function InstDescList() {
    return <ul className="InstDesc_list">{instList}</ul>;
  }
  return (
    <div id="instructor_desc">
      <Heading />
      <Details />
      <InstDescList />
    </div>
  );
}

export default InstructorDescription;
