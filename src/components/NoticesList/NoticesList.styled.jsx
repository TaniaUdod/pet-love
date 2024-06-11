import styled from "styled-components";

export const NoticesListWrap = styled.div`
  margin-bottom: 44px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 60px;
  }

  @media screen and (min-width: 1280px) {
    gap: 40px 32px;
  }
`;
