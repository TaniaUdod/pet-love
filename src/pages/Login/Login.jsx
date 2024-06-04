import React from "react";
import PetBlock from "../../components/PetBlock/PetBlock";
import Title from "../../components/Title/Title";
import LoginForm from "../../components/LoginForm/LoginForm";
import loginMob from "../../images/login-mob.png";
import loginMob2x from "../../images/login-mob@2x.png";
import loginTab from "../../images/login-tab.png";
import loginTab2x from "../../images/login-tab@2x.png";
import loginDesk from "../../images/login-desk.png";
import loginDesk2x from "../../images/register-desk@2x.png";
import {
  LinkStyled,
  LinkText,
  LoginContainer,
  LoginWrap,
  Text,
} from "./Login.styled";

const Login = () => {
  const sources = [
    {
      srcSet: `${loginMob}, ${loginMob2x} 2x`,
      media: "(max-width: 767px)",
      width: 335,
    },
    {
      srcSet: `${loginTab}, ${loginTab2x} 2x`,
      media: "(min-width: 768px) and (max-width: 1279px)",
      width: 704,
    },
    {
      srcSet: `${loginDesk}, ${loginDesk2x} 2x`,
      media: "(min-width: 1280px)",
      width: 592,
    },
  ];

  return (
    <LoginWrap>
      <PetBlock sources={sources} defaultSrc={loginDesk} alt="dog" />
      <LoginContainer>
        <Title text="Log in" />
        <Text>
          Welcome! Please enter your credentials to login to the platform:
        </Text>
        <LoginForm />
        <LinkText>
          Don't have an account?{" "}
          <LinkStyled to="/register">Register</LinkStyled>
        </LinkText>
      </LoginContainer>
    </LoginWrap>
  );
};

export default Login;
