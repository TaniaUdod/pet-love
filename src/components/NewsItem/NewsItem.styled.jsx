import styled from "styled-components";

export const NewsItemWrap = styled.div`
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    width: calc((100% - 24px) / 2);
  }

  @media screen and (min-width: 1280px) {
    width: calc((100% - 35px) / 3);
    max-width: 361px;
  }
`;

export const Img = styled.img`
  width: 335px;
  height: 190px;
  border-radius: 15px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    width: 340px;
    height: 226px;
    margin-bottom: 28px;
  }

  @media screen and (min-width: 1280px) {
    width: 361px;
    height: 226px;
  }
`;

export const Title = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.48px;
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    width: 340px;
    height: 52px;
    font-size: 20px;
    line-height: 26px;
    letter-spacing: -0.6px;
    margin-bottom: 14px;
  }

  @media screen and (min-width: 1280px) {
    width: 361px;
  }
`;

export const Text = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.28px;
  margin-bottom: 19px;

  @media screen and (min-width: 768px) {
    width: 340px;
    height: 80px;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.32px;
    margin-bottom: 28px;
  }

  @media screen and (min-width: 1280px) {
    width: 361px;
  }
`;

export const Detail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    margin-bottom: 28px;
  }
`;

export const Date = styled.p`
  color: rgba(38, 38, 38, 0.5);
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.28px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.32px;
  }
`;

export const Link = styled.a`
  color: #f6b83d;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.28px;
  text-decoration-line: underline;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.32px;
  }
`;
