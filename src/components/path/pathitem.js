import React from "react";

function PathItem() {
  return (
    <li className="Rec_insts_item">
      <div className="Rec_insts_item_head">
        <h2>Enock Mokua</h2>
      </div>
      <div className="Rec_insts_item_body">
        <div className="image">
          <img
            src="https://img-c.udemycdn.com/user/100x100/39722184_a55b_2.jpg"
            alt="headshot"
          />
        </div>
        <p>Machine Learning Engineer</p>
        <span>19 Courses</span>
      </div>
      <button className="Rec_insts_item_footer">View</button>
    </li>
  );
}

export default PathItem;