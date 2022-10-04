import React from "react";

function Card({ course }) {

  console.log(course)
  return (
    <li className="job_card">
      <div className="jobCard_header">
        <h3 className="jobCard_titlle">Introduction To Machine Learning</h3>
        <p className="jobCard_name">
          <span>Enock Mokua</span> <span>Beginner</span>
        </p>
      </div>
      <div className="jobCard_body">
        <div className="jobCard_title"></div>
        <div className="jobCard_spans">
          <span className="jobCard_span"></span>
          <span className="jobCard_span"></span>
          <span className="jobCard_span"></span>
        </div>
      </div>
      <button className="jobCard_footer">View More</button>
    </li>
  );
}

export default Card;
