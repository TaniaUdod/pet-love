import React from "react";
import UserBar from "../UserBar/UserBar";
import LogOutBtn from "../LogOutBtn/LogOutBtn";
import { Nav } from "./UserNav.styled";

const UserNav = ({ ishome }) => {
  return (
    <Nav>
      {!ishome && <LogOutBtn />}
      <UserBar ishome={ishome} />
    </Nav>
  );
};

export default UserNav;
