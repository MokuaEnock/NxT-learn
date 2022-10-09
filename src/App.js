import "./App.js";
import React from "react";
import Home from "./components/home/Home.js";
import About from "./components/about/about.js";
import Contact from "./components/contact/contact.js";
import Login from "./components/login/Login.js";
function App() {
  return (
    <>
      <Home />
      <Login />
      <About />
      <Contact />
    </>
  );
}

export default App;
