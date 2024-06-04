import styled from "styled-components";
import { Link } from "react-router-dom";

export const LoginWrap = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
    gap: 32px;
    margin-bottom: 32px;
  }
`;

export const LoginContainer = styled.div`
  border-radius: 30px;
  background-color: #ffffff;
  padding: 60px 20px;
  margin-top: 10px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    padding: 71px 140px;
    margin-top: 16px;
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1280px) {
    padding: 118px 84px;
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.28px;
  margin-top: 12px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 22px;
    letter-spacing: -0.36px;
    margin-top: 16px;
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1280px) {
    width: 424px;
  }
`;

export const LinkText = styled.p`
  color: rgba(38, 38, 38, 0.5);
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.36px;
  text-align: center;
  margin-top: 12px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.42px;
    margin-top: 16px;
  }
`;

export const LinkStyled = styled(Link)`
  color: #f6b83d;
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: -0.36px;
  text-decoration-line: underline;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.42px;
  }
`;
