import React from "react";
import { LinkLogin, LinkRegister, Nav } from "./AuthNav.styled";

const AuthNav = () => {
  return (
    <Nav>
      <LinkLogin to="/login">Log In</LinkLogin>
      <LinkRegister to="/register">Registration</LinkRegister>
    </Nav>
  );
};

export default AuthNav;
