import React from "react";
import notFound from "../../images/not-found.png";
import notFound2x from "../../images/not-found@2x.png";
import {
  NotFoundContainer,
  Number,
  NumberWrap,
  Picture,
  StyledLink,
  Text,
} from "./NotFound.styled";

const NotFound = () => {
  return (
    <NotFoundContainer>
      <NumberWrap>
        <Number>4</Number>
        <Picture>
          <source srcSet={notFound2x} media="(min-resolution: 192dpi)" />
          <img src={notFound} alt="cat" />
        </Picture>
        <Number>4</Number>
      </NumberWrap>

      <Text>Ooops! This page not found :(</Text>
      <StyledLink to={"/"}>To home page</StyledLink>
    </NotFoundContainer>
  );
};

export default NotFound;
