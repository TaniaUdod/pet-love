import React from "react";
import { NavLink } from "react-router-dom";

const AuthNav = () => {
  return (
    <nav>
      <NavLink to="/login">Log In</NavLink>
      <NavLink to="/register">Registration</NavLink>
    </nav>
  );
};

export default AuthNav;
