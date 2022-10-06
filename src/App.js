import "./App.css";
import About from "./components/about/about";
import Landing from "./components/landing/landing";
import Login from "./components/login/login";
import Contact from "./components/contact/contact";
import Home from "./components/Home/Home";
import Instructor from "./components/Instructors/Instructors";
import Courses from "./components/courses/courses";
import Path from "./components/path/path";
function App() {
  return (
    <>
      <Landing />
      <Login />
      <Home />
      <Instructor />
      <Courses />
      <Path />
      <About />
      <Contact />
    </>
  );
}

export default App;

/*  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/instructor" element={<Instructor />} />
        <Route path="/path" element={<Path />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter> */
