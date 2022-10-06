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

  let allInstructors = course.map((el) => {
    let element = el.visible_instructors[0];
    return {
      id: element.id,
      title: element.title,
      name: element.name,
      job_title: element.job_title,
      display_name: element.display_name,
      image_100x100: element.image_100x100,
      course_title: el.title,
      course_is_paid: el.is_paid,
      course_headline: el.headline,
      course_price: el.price,
      course_image_480x270: el.image_480x270

    };
  });

  console.log("insts", allInstructors);
  /*   let [item, useItem] = useState([]); */
  /*   console.log("jope", insts);
  console.log("all duties", allInstructors()); */
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
