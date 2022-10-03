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

  function InstDescItem() {
    return (
      <li className="instdescitem">
        <div className="instdescitem1"></div>
        <div className="instdescitem2">
          <span>Machine Learning Fundamentals</span>
          <div>
            <span>Hello world</span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </li>
    );
  }

  function InstDescList() {
    return (
      <ul className="InstDesc_list">
        <InstDescItem />
        <InstDescItem />
        <InstDescItem />
      </ul>
    );
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
