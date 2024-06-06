import styled from "styled-components";

export const NewsListWrap = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: 32px 24px;
  }

  @media screen and (min-width: 1280px) {
    gap: 40px 35px;
  }
`;
