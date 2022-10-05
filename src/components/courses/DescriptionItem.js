import React from "react";

function DescriptionItem() {
  return (
    <li className="descriptionItem">
      <div className="item_img">
        <img
          src="https://img-c.udemycdn.com/user/100x100/173002169_0cf4_2.jpg"
          alt="courseImage"
        />
      </div>
      <div className="item_details">
        <p className="item_time">1 hour</p>
        <p className="item_name">Introduction to computer programming.</p>
        <p className="item_desc">
          The NxT project started as a simple website that quueried public API's
          for jobs and freelance opportunities.
        </p>
      </div>
    </li>
  );
}

export default DescriptionItem;
