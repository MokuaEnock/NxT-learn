import React from "react";

function InstructorDescription() {
  function Heading() {
    return (
      <div className="desc_inst">
        <div className="desc_inst_img"></div>
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
  return (
    <div id="instructor_desc">
      <Heading />
      <Details />
    </div>
  );
}

export default InstructorDescription;
