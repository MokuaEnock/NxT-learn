import React from "react";
import UserAside from "./userAside";
import UserFooter from "./userFooter";

function UserPath() {
  function ListItem() {
    return (
      <li id="course_card"   >
        <h2 id="course_card_title">Title</h2>
        <ul id="course_card_instructors">instructors</ul>
        <span id="course_card_buttons">
          <button>Add to Path</button>
          <button>View</button>
        </span>
      </li>
    );
  }
  return (
    <>
      <UserAside />
      <section id="user_path">
        <ul id="path_list">
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </ul>
        <ul id="path_description"></ul>
      </section>
      <UserFooter />
    </>
  );
}

export default UserPath;
