import React from "react";

function LoginForm() {
  return (
    <form id="loginform">
      <div id="logform">
        <span>
          <span>
            <h2>Welcome to NxT learn</h2>
            <p>Create your Account</p>
          </span>

          <span>
            <label htmlFor="username">User Name</label>
            <input type="text" id="username" required />
          </span>

          <span>
            <label htmlFor="email">Enter Email</label>
            <input type="email" id="emaill" required />
          </span>

          <span>
            <label htmlFor="password1">Set password</label>
            <input
              type="password"
              id="password1"
              placeholder="8+ Characters"
              required
              autoComplete="_blank"
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
            />
          </span>

          <button>Create Account</button>
        </span>
      </div>
      <div id="imagform"></div>
    </form>
  );
}

export default LoginForm;
