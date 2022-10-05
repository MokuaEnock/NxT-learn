import React from "react";

function ReccomendInsts() {
  function Item() {
    return (
      <li className="Rec_insts_item">
        <div className="Rec_insts_item_head">
          <h2>Enock Mokua</h2>
        </div>
        <div className="Rec_insts_item_body">
          <div className="image">
            <img src="#" alt="headshot" />
          </div>
          <p>Machine Learning Engineer</p>
          <span>19 Courses</span>
        </div>
        <button className="Rec_insts_item_footer">View</button>
      </li>
    );
  }

  function List() {
    return (
      <ul className="Rec_insts_list">
        <Item />
        <Item />
        <Item />
        <Item />
      </ul>
    );
  }

  return (
    <>
      <h2>Top Instructors</h2>
      <List />
    </>
  );
}

export default ReccomendInsts;
