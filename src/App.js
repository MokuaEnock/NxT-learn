import "./App.css";
import About from "./components/about/about";
import Landing from "./components/landing/landing";
import Courses from "./components/courses/courses";
import Instructor from "./components/Instructors/Instructors";
import Login from "./components/login/login";
import Home from "./components/Home/Home.js";
import Contact from "./components/contact/contact";

function App() {
  return (
    <>
      <Landing />
      <Login />
      <Home />
      <Courses />
      <Instructor />
      <About />
      <Contact />
    </>
  );
}

export default App;
