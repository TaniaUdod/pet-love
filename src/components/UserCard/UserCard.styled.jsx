import styled from "styled-components";

export const UserCardContainer = styled.div`
  border-radius: 30px;
  background-color: #ffffff;
  padding: 54px 20px 40px 20px;

  @media screen and (min-width: 768px) {
    padding: 40px;
  }

  @media screen and (min-width: 1280px) {
    width: 520px;
    position: relative;
  }
`;

export const UserCardLogo = styled.div`
  position: absolute;
  top: 18px;
  left: 20px;
  border-radius: 30px;
  background-color: #f6b83d;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 10px 14px;

  p {
    color: #ffffff;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.28px;
  }

  svg {
    fill: #ffffff;
    stroke: #ffffff;
  }

  @media screen and (min-width: 768px) {
    top: 40px;
    left: 40px;
  }
`;

export const EditUserBtn = styled.button`
  position: absolute;
  top: 18px;
  right: 20px;
  border-radius: 30px;
  background-color: #fff4df;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  transition: transform 150ms linear;

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (min-width: 768px) {
    top: 40px;
    right: 40px;
  }
`;

export const LogOutBtn = styled.button`
  color: #f6b83d;
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: -0.42px;
  text-transform: uppercase;
  border-radius: 30px;
  padding: 12px 28px;
  background-color: #fff4df;
  margin-top: 20px;
  transition: transform 150ms linear, background-color 150ms linear;

  &:hover {
    transform: scale(1.1);
    background-color: #fbe7c1;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.48px;
    padding: 15px 35px;
    margin-top: 40px;
  }
`;
