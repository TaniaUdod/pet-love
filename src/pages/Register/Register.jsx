import React from "react";
import Title from "../../components/Title/Title";
import PetBlock from "../../components/PetBlock/PetBlock";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import registerMob from "../../images/register-mob.png";
import registerMob2x from "../../images/register-mob@2x.png";
import registerTab from "../../images/register-tab.png";
import registerTab2x from "../../images/register-tab@2x.png";
import registerDesk from "../../images/register-desk.png";
import registerDesk2x from "../../images/register-desk@2x.png";
import {
  LinkStyled,
  LinkText,
  RegisterContainer,
  RegisterWrap,
  Text,
} from "./Register.styled";

const Register = () => {
  const sources = [
    {
      srcSet: `${registerMob}, ${registerMob2x} 2x`,
      media: "(max-width: 767px)",
      width: 334,
    },
    {
      srcSet: `${registerTab}, ${registerTab2x} 2x`,
      media: "(min-width: 768px) and (max-width: 1279px)",
      width: 704,
    },
    {
      srcSet: `${registerDesk}, ${registerDesk2x} 2x`,
      media: "(min-width: 1280px)",
      width: 592,
    },
  ];

  return (
    <RegisterWrap>
      <PetBlock sources={sources} defaultSrc={registerDesk} alt="cat" />
      <RegisterContainer>
        <Title text="Registration" />
        <Text>Thank you for your interest in our platform.</Text>
        <RegistrationForm />
        <LinkText>
          Already have an account? <LinkStyled to="/login">Login</LinkStyled>
        </LinkText>
      </RegisterContainer>
    </RegisterWrap>
  );
};

export default Register;
