import React, { useEffect, useState } from "react";
import UserForm from "./userForm";
import UserAside from "./userAside";
import UserFooter from "./userFooter";
import UserHome from "./userHome";
import UserPath from "./userPath";
function UserView() {
  let [item, setItem] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/courses")
      .then((r) => r.json())
      .then((r) => setItem(r))
      .catch((error) => console.log(error));
  }, []);

  console.log(item);

  return (
    <>
      <UserAside />
      <UserForm />
      <UserHome />
      <UserPath />
      <UserFooter />
    </>
  );
}

export default UserView;
