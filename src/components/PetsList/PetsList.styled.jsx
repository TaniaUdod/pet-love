import styled from "styled-components";

export const PetsListContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: column;
  }
`;
