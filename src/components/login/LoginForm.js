import React from "react";

function LoginForm() {
  return (
    <form id="loginform">
      <div>
        <label for="username">User Name</label>
        <input type="text" id="username" required />
        <label for="email">Enter Email</label>
        <input type="email" id="email" required />
        <label for="password1">Set password</label>
        <input
          type="password"
          id="password1"
          placeholder="8+ Characters"
          required
        />
        <label for="password2">Repeat password</label>
        <input type="password" id="password2" required />
        <button>Create Account</button>
      </div>
    </form>
  );
}

export default LoginForm;
