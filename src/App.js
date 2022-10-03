import "./App.css";
import About from "./components/about/about";
import Landing from "./components/landing/landing";
import Courses from "./components/courses/courses";
import Instructor from "./components/Instructors/Instructors";

function App() {
  return (
    <>
      <Landing />
      <Courses />
      <Instructor />
      <About />
    </>
  );
}

export default App;
