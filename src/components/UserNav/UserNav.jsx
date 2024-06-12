import React from "react";
import UserBar from "../UserBar/UserBar";
import LogOutBtn from "../LogOutBtn/LogOutBtn";
import { Nav } from "./UserNav.styled";
import { useLocation } from "react-router-dom";

const UserNav = ({ ishome }) => {
  const location = useLocation();
  const ishomepage = location.pathname === "/";

  return (
    <Nav>
      {!ishomepage && <LogOutBtn />}
      <UserBar ishome={ishome} />
    </Nav>
  );
};

export default UserNav;
