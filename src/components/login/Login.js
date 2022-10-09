import React, { useState, useEffect } from "react";

function Login() {
  let [start, setStart] = useState({
    first_name: "",
    last_name: "",
    email: "",
    github: "",
    password: "",
  });
  let [login, setLogin] = useState({ email: "", password: "" });

  function handleStart(e) {
    e.preventDefault();
    let { name, value } = e.target;
    setStart((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function submit() {
    console.log(start);
  }

  return (
    <section id="login">
      <section>
        <form id="get_started" onSubmit={submit}>
          <span>Get Started</span>
          <span>
            <input
              type="text"
              placeholder="First Name"
              onChange={handleStart}
              value={start.first_name}
            />
            <input
              type="text"
              placeholder="Last Name"
              onChange={handleStart}
              value={start.last_name}
            />
          </span>

          <span>
            <input
              type="email"
              placeholder="Your Email"
              onChange={handleStart}
              value={start.email}
            />
            <input
              type="text"
              placeholder="Your GitHub"
              onChange={handleStart}
              value={start.github}
            />
          </span>
          <span>
            <input
              type="password"
              placeholder="Enter password"
              onChange={handleStart}
              value={start.password}
            />
            <input
              type="password"
              placeholder="Re-enter password"
              onChange={handleStart}
            />
          </span>
          <span>
            <button type="submit">Get Started</button>
          </span>

          <span>
            Already a member <a href="#">Log In</a>
          </span>
        </form>
        <form id="log_in" onSubmit={handleStart}>
          <span>Log In</span>
          <span>
            <label></label>
            <input type="text" placeholder="Username or Email" />
          </span>
          <span>
            <input type="text" placeholder="Password" />
          </span>
          <span>
            <button type="submit">Log In</button>
          </span>
          <span>
            Not a member <a href="#">Join Us</a>
          </span>
        </form>
      </section>
    </section>
  );
}

export default Login;
