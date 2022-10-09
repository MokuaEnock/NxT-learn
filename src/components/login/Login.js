import React, { useState, useEffect } from "react";
import { json } from "server/reply";

function Login() {
  let [start, setStart] = useState({
    first_name: "",
    last_name: "",
    email: "",
    github: "",
    password1: "",
    password2: "",
  });

  function submit() {
    console.log(JSON.stringify(start));
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
              value={start.first_name}
              onChange={(e) =>
                setStart({ ...start, first_name: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Last Name"
              value={start.last_name}
              onChange={(e) =>
                setStart({ ...start, last_name: e.target.value })
              }
            />
          </span>

          <span>
            <input
              type="email"
              placeholder="Your Email"
              value={start.email}
              onChange={(e) => setStart({ ...start, email: e.target.value })}
            />
            <input
              type="text"
              placeholder="Your GitHub"
              value={start.github}
              onChange={(e) => setStart({ ...start, github: e.target.value })}
            />
          </span>
          <span>
            <input
              type="password"
              placeholder="Enter password"
              value={start.password1}
              onChange={(e) =>
                setStart({ ...start, password1: e.target.value })
              }
            />
            <input
              type="password"
              placeholder="Re-enter password"
              value={start.password2}
              onChange={(e) =>
                setStart({ ...start, password2: e.target.value })
              }
            />
          </span>
          <span>
            <button type="submit">Get Started</button>
          </span>

          <span>
            Already a member <a href="#">Log In</a>
          </span>
        </form>
        <form id="log_in">
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
