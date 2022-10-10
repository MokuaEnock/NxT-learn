import React from "react";
import UserForm from "./userForm";
import UserAside from "./userAside";
import UserFooter from "./userFooter";
function UserView() {
  return (
    <>
      <UserAside />
      <UserForm />
      <UserFooter />
      <UserAside />
    </>
  );
}

export default UserView;
