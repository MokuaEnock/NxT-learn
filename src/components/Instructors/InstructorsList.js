import React from "react";

function InstructorList({ allInstructors, handleview }) {
  function handlePath(item) {
    console.log(item);
  }

  let allInstructs = allInstructors.map((element, index) => {
    return (
      <li className="Rec_insts_item" key={index}>
        <div className="Rec_insts_item_head">
          <h2>{element.display_name}</h2>
        </div>
        <div className="Rec_insts_item_body">
          <div className="image">
            <img src={element.image_100x100} alt="headshot" />
          </div>
          <p>{element.job_title}</p>
        </div>
        <div className="Rec_insts_item_f">
          <button className="Rec_insts_item_footer" onClick={handleview}>
            View
          </button>
          <button className="Rec_insts_item_footer" onClick={handlePath}>
            Add to Path
          </button>
        </div>
      </li>
    );
  });

  return <ul id="inst_item_cont">{allInstructs}</ul>;
}

export default InstructorList;
