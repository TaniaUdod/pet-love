import { Link } from "react-router-dom";
import styled from "styled-components";

export const NotFoundContainer = styled.div`
  border-radius: 30px;
  background-color: #f6b83d;
  padding: 245px 33px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    border-radius: 60px;
    padding: 221px 32px;
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1280px) {
    padding: 109px 0;
  }
`;

export const NumberWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Number = styled.p`
  color: #ffffff;
  font-size: 120px;
  font-weight: 800;
  line-height: 120px;

  @media screen and (min-width: 768px) {
    font-size: 300px;
    font-weight: 800;
    line-height: 300px;
  }
`;

export const Picture = styled.picture`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;

  img {
    width: 109px;
    height: 109px;
    border-radius: 50%;
  }

  @media screen and (min-width: 768px) {
    img {
      width: 280px;
      height: 280px;
    }
  }
`;

export const Text = styled.p`
  color: #ffffff;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.48px;
  text-align: center;
  margin: 20px 0;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -0.72px;
    margin: 40px 0 20px;
  }
`;

export const StyledLink = styled(Link)`
  color: #f6b83d;
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: -0.42px;
  border-radius: 30px;
  background-color: #fff4df;
  text-align: center;
  margin: 0 auto;
  display: block;
  align-content: center;
  width: 150px;
  height: 42px;
  transition: transform 150ms linear, background-color 150ms linear;

  &:hover {
    transform: scale(1.1);
    background-color: #fbe7c1;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.48px;
    width: 162px;
    height: 48px;
  }
`;
