import React, { useState } from "react";

function Login() {
  let [start, setStart] = useState({
    first_name: "",
    last_name: "",
    email: "",
    github: "",
    password1: "",
    password2: "",
  });

  let [login, setLogin] = useState({
    email: "",
    password: "",
  });

  function submitLogin(e) {
    e.preventDefault();
    console.log(login);
    fetch("http://localhost:8000/users")
      .then((r) => r.json())
      .then((items) => {
        let data = items.map((item) => {
          let id = item.user_id;
          return id;
        });
        console.log(data);
      });
  }

  function submitStart(e) {
    e.preventDefault(start);
    fetch("http://localhost:8000/users")
      .then((r) => r.json())
      .then((items) => {
        let data = items.map((item) => {
          let id = item.user_id;
          return id;
        });
        let details = { user_id: data.length++, user_details: [start] };
        fetch("http://localhost:8000/users", {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(details),
        })
          .then((r) => r.json())
          .then((r) => console.log(r));
        console.log(data);
      });
  }

  return (
    <section id="login">
      <section>
        <form id="get_started" onSubmit={submitStart}>
          <h2>Get Started</h2>
          <span>
            <input
              type="text"
              placeholder="First Name"
              value={start.first_name}
              autoComplete="on"
              required
              onChange={(e) =>
                setStart({ ...start, first_name: e.target.value })
              }
            />
            <input
              type="text"
              autoComplete="on"
              required
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
              autoComplete="on"
              required
              placeholder="Your Email"
              value={start.email}
              onChange={(e) => setStart({ ...start, email: e.target.value })}
            />
            <input
              type="text"
              autoComplete="on"
              required
              placeholder="Your GitHub"
              value={start.github}
              onChange={(e) => setStart({ ...start, github: e.target.value })}
            />
          </span>
          <span>
            <input
              required
              autoComplete="on"
              type="password"
              placeholder="Enter password"
              value={start.password1}
              onChange={(e) =>
                setStart({ ...start, password1: e.target.value })
              }
            />
            <input
              type="password"
              required
              autoComplete="on"
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

        <form id="log_in" onSubmit={submitLogin}>
          <h2>Log In</h2>
          <span>
            <label></label>
            <input
              type="email"
              required
              autoComplete="on"
              placeholder="Username or Email"
              value={login.email}
              onChange={(e) => setLogin({ ...login, email: e.target.value })}
            />
          </span>
          <span>
            <input
              type="paassword"
              required
              autoComplete="on"
              placeholder="Password"
              value={login.password}
              onChange={(e) => setLogin({ ...login, password: e.target.value })}
            />
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
