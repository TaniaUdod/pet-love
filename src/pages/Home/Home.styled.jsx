import styled from "styled-components";

export const HomeContainer = styled.div`
  margin: 10px 0 10px;

  @media screen and (min-width: 768px) {
    margin: 16px 0 16px;
  }
`;

export const TitleWrap = styled.div`
  border-radius: 30px;
  background-color: #f6b83d;
  padding: 118px 20px 50px;
  margin-top: -80px;

  @media screen and (min-width: 768px) {
    padding: 178px 32px 44px;
    margin-top: -96px;
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    padding: 178px 64px 32px;
    margin-top: -116px;
  }
`;

export const Title = styled.h1`
  color: #ffffff;
  font-size: 50px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: -1.5px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 80px;
    line-height: 77px;
    letter-spacing: -2.4px;
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 90px;
    line-height: 87px;
    letter-spacing: -2.7px;
    width: 760px;
    margin-bottom: 0;
  }
`;

export const TitleSpan = styled.span`
  color: rgba(255, 255, 255, 0.4);
  font-size: 50px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: -1.5px;

  @media screen and (min-width: 768px) {
    font-size: 80px;
    line-height: 77px;
    letter-spacing: -2.4px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 90px;
    line-height: 87px;
    letter-spacing: -2.7px;
  }
`;

export const Text = styled.p`
  color: #ffffff;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.28px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 22px;
    letter-spacing: -0.36px;
    width: 255px;
    margin-left: auto;
  }

  @media screen and (min-width: 1280px) {
    align-self: flex-end;
  }
`;
