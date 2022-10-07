import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bg from "../assets/pexels-eva-bronzini-7641223.jpg";

function LoginForm() {
  let [title, setTitle] = useState("");
  let [email, setEmail] = useState("");
  let [pass1, setPass1] = useState("");
  let [pass2, setPass2] = useState("");

  let navigate = useNavigate();

  function handleForm(e) {
    e.preventDefault();
    navigate("/home");
    if (pass1.length >= 8) {
      if (pass1 === pass2) {
      } else {
        console.log("hopeless");
      }
    } else {
      console.log("horror");
    }
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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </span>

          <span>
            <label htmlFor="email">Enter Email</label>
            <input
              type="email"
              id="emaill"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </span>

          <span>
            <label htmlFor="password1">Set password</label>
            <input
              type="password"
              id="password1"
              placeholder="8+ Characters"
              autoComplete="_blank"
              value={pass1}
              required
              onChange={(e) => setPass1(e.target.value)}
            />
          </span>

          <span>
            <label htmlFor="password2">Repeat password</label>
            <input
              type="password"
              id="password2"
              autoComplete="_blank"
              placeholder="Repeat password"
              value={pass2}
              required
              onChange={(e) => setPass2(e.target.value)}
            />
          </span>

          <button>Create Account</button>
        </span>
      </div>
      <div
        id="imagform"
        style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
      >
        <div>
          <h2>Made for developers by developers</h2>
          <p>
            Grow your technical skills by enrolling in one of our courses today
          </p>
        </div>

        <p>Towards project based learning</p>
      </div>
    </form>
  );
}

export default LoginForm;
