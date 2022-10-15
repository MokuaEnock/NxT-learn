import React from "react";
import UserAside from "./userAside";
import UserFooter from "./userFooter";

function UserPath() {
  function ListItem() {
    return <li id="course_card">
         <h2>Hello</h2>
        <span>
          <button>Remove</button>
          <button>Start</button>
        </span>
    </li>;
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
