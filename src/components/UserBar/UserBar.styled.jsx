import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
`;

export const Button = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff4df;

  @media screen and (min-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

export const Img = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;

  @media screen and (min-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

export const UserName = styled.p`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    font-size: 20px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: -0.6px;
    color: ${({ ishome }) => (ishome === "true" ? "#ffffff" : "#262626")};
  }
`;
