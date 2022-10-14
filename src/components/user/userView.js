import React from "react";
import UserForm from "./userForm";
import UserAside from "./userAside";
import UserFooter from "./userFooter";
import UserHome from "./userHome";
import UserPath from "./userPath";
function UserView() {
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
