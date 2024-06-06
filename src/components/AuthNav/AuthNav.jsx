import React from "react";
import { LinkLogin, LinkRegister, Nav } from "./AuthNav.styled";

const AuthNav = ({ ishome }) => {
  return (
    <Nav ishome={ishome.toString()}>
      <LinkLogin to="/login" ishome={ishome.toString()}>
        Log In
      </LinkLogin>
      <LinkRegister to="/register">Registration</LinkRegister>
    </Nav>
  );
};

export default AuthNav;
