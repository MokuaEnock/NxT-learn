import React from "react";
import DescriptionItem from "./DescriptionItem";

function Description() {
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
      <ul className="desc_body">
        <DescriptionItem />
        <DescriptionItem />
        <DescriptionItem />
      </ul>
    </div>
  );
}

export default Description;
