import React from "react";

function UserForm() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("hello World")
  }
  return (
    <section id="userForm">
      <p>Hello there Enock</p>
      <div>
        <form id="userForm1"></form>
        <form id="userForm2" onSubmit={handleSubmit}>
          <span>
            <label htmlFor="path_type">Which path would you like to follow?</label>
            <select name="path_type" id="path_type">
              <option>Select Path</option>
              <option value="self_led">Self Led</option>
              <option value="instructor_led">Instructor Led</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </span>
          <span>
            <label htmlFor="skill_level">What is your level in programming?</label>
            <select name="skill_levels" id="skill_level">
              <option>Select Experience Level</option>
              <option value="novice">Novice</option>
              <option value="a_beginner">Advanced Beginner</option>
              <option value="competent">Competent</option>
              <option value="proficient">Proficient</option>
              <option value="expert">Expert</option>
            </select>
          </span>
          <span>
            <label htmlFor="job_experience">Do you have any job experience</label>
            <select name="job_experience" id="job_experience">
              <option>Select Experience Level</option>
              <option value="novice">Novice</option>
              <option value="a_beginner">I dont have any</option>
              <option value="proficient">I have built some projects </option>
              <option value="expert">I have worked before</option>
            </select>
          </span>

          <span>
            <label>
              Are you looking for new opportunities after completing some
              courses?
            </label>
            <select name="work_experience" id="work_experience">
              <option>Have you had any experience?</option>
              <option value="yes_exp">Yes</option>
              <option value="no_exp">No</option>
            </select>
          </span>

          <span>
            <label>Please provide your career objectives</label>
            <textarea id="career_objectives" rows="5" columns="33" />
          </span>

          <span>
            <button type="submit">Submit</button>
          </span>
        </form>
      </div>
    </section>
  );
}

export default UserForm;
