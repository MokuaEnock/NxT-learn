import React from "react";

function UserForm() {
  return (
    <section id="userForm">
      <p>Hello there Enock</p>
      <div>
        <form id="userForm1"></form>
        <form id="userForm2">
          <span>
            <label form="path_type">Which path would you like to follow?</label>
            <select name="path_type" id="path_type">
              <option>Select Path</option>
              <option value="self_led">Self Led</option>
              <option value="instructor_led">Instructor Led</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </span>{" "}
          <span>
            <label></label>
          </span>{" "}
          <span>
            <label></label>
          </span>{" "}
          <span>
            <label></label>
          </span>{" "}
          <span>
            <label></label>
          </span>
        </form>
      </div>
    </section>
  );
}

export default UserForm;
