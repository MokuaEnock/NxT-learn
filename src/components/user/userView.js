import React, { useEffect, useState } from "react";
import UserForm from "./userForm";
import UserAside from "./userAside";
import UserFooter from "./userFooter";
import UserHome from "./userHome";
import UserPath from "./userPath";
function UserView() {
  let [module, setModule] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Code-and-Data/repos")
      .then((r) => r.json())
      .then((r) => setModule(r))
      .catch((error) => console.log(error));
  }, []);
  let module1 = [...module];
  let intro_python = module1.sort().splice(0, 8);
  let module2 = [...module];
  let mach_learn = module2.sort().splice(9, 18);
  /*  function fetchContributors(url) {
    let y = [];
    fetch(url, { y })
      .then((r) => r.json())
      .then((r) => y.push(r));
    return y;
  }
  let intro = intro_python.map((item) => {
    return item.contributors_url;
  });

  let unique = (arr) => [...new Set(arr)];
  let intro_python_instructors = unique(intro);

  console.log(intro_python_instructors);
  */

  /*   let python = intro_python_instructors.map((item) => {
    return fetchContributors(item);
  }); */

  let introductionToPython = {
    course_id: 1,
    course_title: "Introduction to Python",
    course_description: "A comprehensive introduction to python programming.",
    course_category: ["Python"],
    "course_pre-requisets": [1, 2, 3, 4, 5],
    course_instructional_level: "Beginner",
    course_image:
      "https://img-c.udemycdn.com/course/480x270/2776760_f176_10.jpg",
    course_instructors: ["MokuaEnock"],
    course_modules: intro_python,
    course_hours: `${intro_python.length * 1} hours`,
    rating: 4.6,
  };
  let machineLearning = {
    course_id: 2,
    course_title: "Machine Learning",
    course_description:
      "A comprehensive introduction to machine learning consepts.",
    course_category: ["Python"],
    "course_pre-requisets": [1, 2, 3, 4, 5],
    course_instructional_level: "Intermediate",
    course_image:
      "https://img-c.udemycdn.com/course/480x270/2776760_f176_10.jpg",
    course_instructors: ["MokuaEnock"],
    course_modules: mach_learn,
    course_hours: `${mach_learn.length * 1} hours`,
    rating: 4.6,
  };

  let courses = [introductionToPython, machineLearning];

  return (
    <>
      <UserAside />
      <UserForm />
      <UserHome courses={courses} />
      <UserPath />
      <UserFooter />
    </>
  );
}

export default UserView;
