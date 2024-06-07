import styled from "styled-components";

export const FriendsListContainer = styled.div`
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 44px;
  }

  @media screen and (min-width: 1280px) {
    gap: 28px 20px;
    margin-top: 60px;
  }
`;
