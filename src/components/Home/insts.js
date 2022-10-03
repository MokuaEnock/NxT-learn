import React from "react";

function ReccomendInsts() {
  function Item() {
    return <li className="Rec_insts_item"></li>;
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
