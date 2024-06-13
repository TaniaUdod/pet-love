import React from "react";
import sprite from "../../images/sprite.svg";
import { StyledLink, Title, TitleWrap } from "./PetsBlock.styled";

const PetsBlock = () => {
  return (
    <>
      <TitleWrap>
        <Title>My pets</Title>
        <StyledLink to="/add-pet">
          <p>Add pet</p>
          <svg width="18" height="18" fill="#FFFFFF" stroke="#FFFFFF">
            <use href={`${sprite}#icon-plus`} />
          </svg>
        </StyledLink>
      </TitleWrap>
    </>
  );
};

export default PetsBlock;
