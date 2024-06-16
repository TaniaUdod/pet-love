import styled from "styled-components";

export const MyNoticesContainer = styled.div`
  @media screen and (min-width: 1280px) {
    max-width: 664px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 40px 0 20px;

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    gap: 8px;
  }

  @media screen and (min-width: 1280px) {
    margin: 40px 0 32px;
  }
`;

export const ButtonFavoritePets = styled.div`
  color: ${({ isactive }) => (isactive ? "#ffffff" : "#262626")};
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.42px;
  border-radius: 30px;
  background-color: ${({ isactive }) => (isactive ? "#f6b83d" : "#ffffff")};
  padding: 12px;
  cursor: pointer;
  transition: background-color 150ms linear, color 150ms linear;

  &:hover {
    background-color: #f6b83d;
    color: #ffffff;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.48px;
    padding: 14px;
  }
`;

export const ButonViewed = styled.div`
  color: ${({ isactive }) => (isactive ? "#ffffff" : "#262626")};
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.42px;
  border-radius: 30px;
  background-color: ${({ isactive }) => (isactive ? "#f6b83d" : "#ffffff")};
  padding: 12px 39px;
  cursor: pointer;
  transition: background-color 150ms linear, color 150ms linear;

  &:hover {
    background-color: #f6b83d;
    color: #ffffff;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.48px;
    padding: 14px 45px;
  }
`;
