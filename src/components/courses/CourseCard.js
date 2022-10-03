import React from "react";

function Card() {
  return (
    <li className="job_card">
      <div className="jobCard_header"></div>
      <div className="jobCard_body">
        <div className="jobCard_title">UI Vektor illustration Design</div>
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
