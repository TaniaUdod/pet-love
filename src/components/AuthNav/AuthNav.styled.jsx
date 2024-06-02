import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    margin-left: auto;
  }
`;

export const LinkLogin = styled(Link)`
  color: #ffffff;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.48px;
  text-transform: uppercase;
  padding: 15px 35px;
  border-radius: 30px;
  background-color: #f6b83d;
  transition: transform 150ms linear, background-color 150ms linear;

  &:hover {
    transform: scale(1.1);
    background-color: #f9b020;
  }
`;

export const LinkRegister = styled(Link)`
  color: #f6b83d;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.48px;
  text-transform: uppercase;
  padding: 15px 20px;
  border-radius: 30px;
  background-color: #fff4df;
  transition: transform 150ms linear, background-color 150ms linear;

  &:hover {
    transform: scale(1.1);
    background-color: #fbe7c1;
  }
`;
