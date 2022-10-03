import React from "react";

function ReccomendInsts() {
  function Item() {
    return <li className="Rec_insts_item"></li>;
  }

  function List() {
    return (
      <ul className="Rec_insts_list">
        <Item />
      </ul>
    );
  }

  return <List />;
}

export default ReccomendInsts;
