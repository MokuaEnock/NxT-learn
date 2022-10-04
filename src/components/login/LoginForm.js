import React from "react";

function LoginForm() {
  return (
    <form id="loginform">
      <div>
        <label for="username">User Name</label>
        <input type="text" id="username" />
        <label for="email">Enter Email</label>
        <input type="email" id="email" />
        <label for="password1">Set password</label>
        <input type="password" id="password1" placeholder="8+ Characters" />
        <label for="password2">Repeat password</label>
        <input type="password" id="password2" />
        <button>Create Account</button>
      </div>
    </form>
  );
}

export default LoginForm;
