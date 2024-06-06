import styled from "styled-components";

export const NewsContainer = styled.div`
  margin: 34px 0 80px;

  @media screen and (min-width: 768px) {
    margin: 53px 0 80px;
  }

  @media screen and (min-width: 1280px) {
    width: 1153px;
    margin: 64px auto 80px;
  }
`;

export const TitleWrap = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 44px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 60px;
  }
`;
