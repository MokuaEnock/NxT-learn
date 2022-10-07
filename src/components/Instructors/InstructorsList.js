import React from "react";
import ReactDOM from "react-dom/client";

function InstructorList({ allInstructors, course, instructors }) {
  function handlePath(item) {
    console.log(item);
  }

  function handleView() {
    function getRandomArbitrary(min, max) {
      return Math.round(Math.random() * (max - min) + min);
    }
    let y = getRandomArbitrary(11, 20);
    let x = getRandomArbitrary(0, 10);
    let slicedInsts = instructors.slice(x, y);
    let list = document.querySelector(".InstDesc_list");
    list.innerHTML = [];
    let mapped = slicedInsts.map((e) => {
      return (
        <li className="instdescitem" key={e.course_id}>
          <div className="instdescitem1">
            <img src={e.image_480x270} alt="course" />
          </div>
          <div className="instdescitem2">
            <span>{e.title}</span>
            <div>
              <span>Rating: {Math.round(e.rating * 100) / 100}</span>
              <span>Enrolled:{e.num_reviews}</span>
              <span>Lectures: {e.num_published_lectures}</span>
              <a
                href={`www.udemy.com${e.url}`}
                target="_blank"
                rel="noreferrer"
              >
                Start
              </a>
            </div>
          </div>
        </li>
      );
    });
    /* dangerouslySetInnerHTML={{ __html: list.mapped }} */
    /*  console.log(slicedList);
    list.innerHTML = slicedList; */
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
          <button className="Rec_insts_item_footer" onClick={handleView}>
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
