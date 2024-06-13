import styled from "styled-components";

export const Img = styled.img`
  width: 94px;
  height: 94px;
  border-radius: 100px;
  margin: 22px auto 30px;

  @media screen and (min-width: 768px) {
    width: 110px;
    height: 110px;
    margin: 0 auto 28px;
  }
`;

export const SpanImg = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 94px;
  height: 94px;
  border-radius: 100px;
  background-color: #fff4df;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 110px;
    height: 110px;

    svg {
      width: 50px;
      height: 50px;
    }
  }
`;

export const ButtonUpload = styled.button`
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.24px;
  text-decoration-line: underline;
  display: flex;
  justify-content: center;
  margin: 8px auto 28px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.28px;
    margin: 8px auto 20px;
  }
`;

export const Title = styled.p`
  color: #2b2b2a;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const InfoList = styled.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
  }
`;

export const InfoItem = styled.li`
  border-radius: 30px;
  border: 1px solid #f6b83d;
  padding: 12px;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }

  p {
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.42px;
  }

  @media screen and (min-width: 768px) {
    width: 100%;
    max-width: 305px;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1280px) {
    max-width: 440px;
    padding: 16px;

    p {
      font-size: 16px;
      line-height: 20px;
      letter-spacing: -0.48px;
    }
  }
`;
