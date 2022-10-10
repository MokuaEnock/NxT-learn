import React from "react";
import UserForm from "./userForm";
import UserAside from "./userAside";
import UserFooter from "./userFooter";
import UserHome from "./userHome";
function UserView() {
  return (
    <>
      <UserAside />
      <UserForm />
      <UserHome />
      <UserFooter />
    </>
  );
}

export default UserView;
