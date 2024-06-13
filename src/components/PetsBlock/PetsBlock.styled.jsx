import styled from "styled-components";
import { Link } from "react-router-dom";

export const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 0 20px;
`;

export const Title = styled.p`
  color: #2b2b2a;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const StyledLink = styled(Link)`
  border-radius: 30px;
  background-color: #f6b83d;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 10px 16px;
  transition: transform 150ms linear;

  &:hover {
    transform: scale(1.1);
  }

  p {
    color: #ffffff;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.42px;
  }

  @media screen and (min-width: 768px) {
    padding: 10px 20px;

    p {
      font-size: 16px;
      line-height: 20px;
      letter-spacing: -0.48px;
    }
  }
`;
