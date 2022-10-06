import React from "react";

function ReccomendInsts({ course }) {
  let course1 = course.slice(0, 4);
  let allInstructors = course1.map((el) => {
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
      course_image_480x270: el.image_480x270,
    };
  });
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
          {/*  <span>19 Courses</span> */}
        </div>
        <div className="Rec_insts_item_f">
          <button className="Rec_insts_item_footer">Add to Path</button>
        </div>
      </li>
    );
  });

  function List() {
    return <ul className="Rec_insts_list">{allInstructs}</ul>;
  }

  return (
    <>
      <h2>Top Instructors</h2>
      <List />
    </>
  );
}

export default ReccomendInsts;
