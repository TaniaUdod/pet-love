import styled from "styled-components";

export const ViewedList = styled.div`
  margin-bottom: 80px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 80px;
  }

  @media screen and (min-width: 1280px) {
    gap: 24px;
    margin-bottom: 64px;
  }
`;
