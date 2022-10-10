import React, { useState } from "react";

function UserForm() {
  let [form, setForm] = useState({
    user_path: "",
    user_programing_level: "",
    user_job_experience: "",
    user_job_interest: "",
    user_career_objectives: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    console.log("hello World");
    console.log(form);
  }
  return (
    <section id="userForm">
      <p>Hello there Enock</p>
      <div>
        <form id="userForm1"></form>
        <form id="userForm2" onSubmit={handleSubmit}>
          <span>
            <label htmlFor="path_type">
              Which path would you like to follow?
            </label>
            <select
              name="path_type"
              id="path_type"
              onChange={(e) => setForm({ ...form, user_path: e.target.value })}
            >
              <option>Select Path</option>
              <option value="self_led">Self Led</option>
              <option value="instructor_led">Instructor Led</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </span>
          <span>
            <label htmlFor="skill_level">
              What is your level in programming?
            </label>
            <select
              name="skill_levels"
              id="skill_level"
              onChange={(e) =>
                setForm({ ...form, user_programming_level: e.target.value })
              }
            >
              <option>Select Experience Level</option>
              <option value="novice">Novice</option>
              <option value="a_beginner">Advanced Beginner</option>
              <option value="competent">Competent</option>
              <option value="proficient">Proficient</option>
              <option value="expert">Expert</option>
            </select>
          </span>
          <span>
            <label htmlFor="job_experience">
              Do you have any job experience
            </label>
            <select
              name="job_experience"
              id="job_experience"
              onChange={(e) =>
                setForm({ ...form, user_job_experience: e.target.value })
              }
            >
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
            <select
              name="work_experience"
              id="work_experience"
              onChange={(e) =>
                setForm({ ...form, user_job_interest: e.target.value })
              }
            >
              <option>Have you had any experience?</option>
              <option value="yes_exp">Yes</option>
              <option value="no_exp">No</option>
            </select>
          </span>

          <span>
            <label>Please provide your career objectives</label>
            <textarea
              id="career_objectives"
              rows="5"
              value={form.first_name}
              columns="33"
              onChange={(e) =>
                setForm({ ...form, user_career_objectives: e.target.value })
              }
            />
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
