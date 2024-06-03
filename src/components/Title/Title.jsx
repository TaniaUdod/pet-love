import React from "react";
import { TitleText } from "./Title.styled";

const Title = ({ text }) => {
  return (
    <>
      <TitleText>{text}</TitleText>
    </>
  );
};

export default Title;
