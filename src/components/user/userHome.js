import React from "react";
import UserAside from "./userAside";
import UserFooter from "./userFooter";
function UserHome() {
  function CourseItem() {
    return (
      <li id="course_card">
        <span>
          <button>View</button>
          <button>Add to Path</button>
        </span>
      </li>
    );
  }
  return (
    <>
      <UserAside />
      <section id="userHome">
        <h2>Discover Courses.</h2>
        <form>
          <input type="text" placeholder="Search Courses" />

          <select placeholder="Select Language">
            <option>Select Language</option>
            <option value="python">Python</option>
            <option value="javascript">Javascript</option>
            <option value="html_css">HTML & CSS</option>
          </select>

          <select>
            <option>Select Framework or Module</option>
            <option value="pandas">Pandas</option>
            <option value="react">React</option>
            <option value="bootstrap">Bootstrap</option>
            <option value="svelte">Svelte</option>
          </select>
        </form>
        <div id="user_home_container">
          <ul id="course_list">
            <CourseItem />
            <CourseItem />
            <CourseItem />
            <CourseItem />
            <CourseItem />
            <CourseItem />
            <CourseItem />
            <CourseItem />
            <CourseItem />
            <CourseItem />
            <CourseItem />
            <CourseItem />
            <CourseItem />
          </ul>
        </div>
      </section>
      <UserFooter />
    </>
  );
}

export default UserHome;
