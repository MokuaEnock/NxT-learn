import React, { useState } from "react";

function LoginForm() {
  let [title, setTitle] = useState("");
  let [email, setEmail] = useState("");
  let [pass1, setPass1] = useState("");
  let [pass2, setPass2] = useState("");

  function handleForm(e) {
    e.preventDefault();
    console.log(title.replace, email, pass1, pass2);
  }

  return (
    <form id="loginform" onSubmit={handleForm}>
      <div id="logform">
        <span>
          <span>
            <h2>Welcome to NxT learn</h2>
            <p>Create your Account</p>
          </span>

          <span>
            <label htmlFor="username">User Name</label>
            <input
              type="text"
              id="username"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </span>

          <span>
            <label htmlFor="email">Enter Email</label>
            <input
              type="email"
              id="emaill"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </span>

          <span>
            <label htmlFor="password1">Set password</label>
            <input
              type="password"
              id="password1"
              placeholder="8+ Characters"
              required
              autoComplete="_blank"
              value={pass1}
              onChange={(e) => setPass1(e.target.value)}
            />
          </span>

          <span>
            <label htmlFor="password2">Repeat password</label>
            <input
              type="password"
              id="password2"
              required
              autoComplete="_blank"
              placeholder="Repeat password"
              value={pass2}
              onChange={(e) => setPass2(e.target.value)}
            />
          </span>

          <button>Create Account</button>
        </span>
      </div>
      <div id="imagform">
        <h2>Made for developers by developers</h2>
        <p>
          Grow your technical skills by enrolling in one of our courses today
        </p>
      </div>
    </form>
  );
}

export default LoginForm;
