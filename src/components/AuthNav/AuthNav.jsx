import React from "react";
import { LinkLogin, LinkRegister, Nav } from "./AuthNav.styled";

const AuthNav = ({ ishome }) => {
  return (
    <Nav ishome={ishome}>
      <LinkLogin to="/login" ishome={ishome}>
        Log In
      </LinkLogin>
      <LinkRegister to="/register">Registration</LinkRegister>
    </Nav>
  );
};

export default AuthNav;
