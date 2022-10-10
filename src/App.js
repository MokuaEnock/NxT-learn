import "./App.js";
import React from "react";
import Home from "./components/home/Home.js";
import About from "./components/about/about.js";
import Contact from "./components/contact/contact.js";
import Login from "./components/login/Login.js";
import UserView from "./components/user/userView.js";
function App() {
  return (
    <>
      <Home />
      <Login />
      <UserView />
      <About />
      <Contact />
    </>
  );
}

export default App;
