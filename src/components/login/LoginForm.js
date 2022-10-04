import React from "react";

function LoginForm() {
  return (
    <form id="loginform">
      <div id="logform">
        <label htmlFor="username">User Name</label>
        <input type="text" id="username" required />
        <label htmlFor="email">Enter Email</label>
        <input type="email" id="emaill" required />
        <label htmlFor="password1">Set password</label>
        <input
          type="password"
          id="password1"
          placeholder="8+ Characters"
          required
          autoComplete="_blank"
        />
        <label htmlFor="password2">Repeat password</label>
        <input
          type="password"
          id="password2"
          required
          autoComplete="_blank"
          placeholder="Reapeat password"
        />
        <button>Create Account</button>
      </div>
      <div id="imagform"></div>
    </form>
  );
}

export default LoginForm;
