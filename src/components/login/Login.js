import React, { useState, useEffect } from "react";

function Login() {
  return (
    <section id="login">
      <section>
        <form id="get_started">
          <span>Get Started</span>
          <span>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </span>

          <span>
            <input type="email" placeholder="Your Email" />
            <input type="text" placeholder="Your GitHub" />
          </span>
          <span>
            <input type="password" placeholder="Enter password" />
            <input type="password" placeholder="Re-enter password" />
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
