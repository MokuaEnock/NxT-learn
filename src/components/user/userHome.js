import React from "react";
import UserAside from "./userAside";
import UserFooter from "./userFooter";
function UserHome() {
  return (
    <>
      <UserAside />
      <section id="userHome">User Home component</section>
      <UserFooter />
    </>
  );
}

export default UserHome;
