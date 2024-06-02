import React from "react";
import UserBar from "../UserBar/UserBar";
import LogOutBtn from "../LogOutBtn/LogOutBtn";

const UserNav = () => {
  return (
    <nav>
      <LogOutBtn />
      <UserBar />
    </nav>
  );
};

export default UserNav;
