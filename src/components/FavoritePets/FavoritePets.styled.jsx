import styled from "styled-components";

export const FavoritesItemList = styled.ul`
  margin-bottom: 80px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  @media screen and (min-width: 1280px) {
    gap: 24px;
  }
`;

export const Text = styled.p`
  text-align: center;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.28px;
  margin: 80px 0 80px;

  span {
    color: #f6b83d;
    font-size: 14px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: -0.28px;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.32px;
    width: 458px;
    margin: 180px auto 180px;

    span {
      font-size: 16px;
      line-height: 20px;
      letter-spacing: -0.32px;
    }
  }

  @media screen and (min-width: 1280px) {
    margin-left: 103px;
  }
`;
