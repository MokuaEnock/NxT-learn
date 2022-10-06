import React, { useState } from "react";
import DescriptionItem from "./DescriptionItem";

function Description({ course }) {
  let alldesc = course.map((element) => {
    return (
      <li className="descriptionItem" key={element.id}>
        <div className="item_img">
          <img src={element.image_480x270} alt="courseImage" />
        </div>
        <div className="item_details">
          <p className="item_time">1 hour</p>
          <p className="item_name">{element.title}</p>
          <p className="item_desc">{element.headline}</p>
        </div>
      </li>
    );
  });

  return (
    <div id="description">
      <div className="desc_rating">
        <span></span>
        <span></span>
      </div>

      <h3 className="desc_header">Introduction To Machine Learning</h3>

      <div className="desc_inst">
        <div className="desc_inst_img">
          <img
            src="https://img-c.udemycdn.com/user/100x100/38516954_b11c_3.jpg"
            alt="headshot"
          />
        </div>

        <div className="desc_inst_info">
          <h4>Enock Mokua</h4>
          <p>Machine Learning Engineer</p>
        </div>
      </div>

      <p className="desc_desc">
        The NxT Learn complements the NxT project by providing skills for its
        users the website implements this by providing courses based that
        incoporate projects in its learning.
      </p>
      <ul className="desc_body">{alldesc}</ul>
    </div>
  );
}

export default Description;
