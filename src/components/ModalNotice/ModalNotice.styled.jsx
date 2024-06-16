import styled from "styled-components";

export const ModalOverlay = styled.div`
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
  position: relative;
  z-index: 20;
  background-color: #ffffff;
  border-radius: 30px;
  padding: 40px 28px;
  display: inline-flex;
  flex-direction: column;
  max-width: 335px;
  width: 95%;
  max-height: 95vh;
  overflow: overlay;

  @media screen and (min-width: 768px) {
    max-width: 473px;
    padding: 40px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  width: 24px;
  height: 24px;
  cursor: pointer;
  right: 20px;
  top: 20px;

  & svg {
    width: 24px;
    height: 24px;
    fill: none;
    stroke: #262626;
    transition: transform 150ms linear, stroke 150ms linear;

    &:hover {
      transform: scale(1.2);
      stroke: #f6b83d;
    }
  }
`;

export const Img = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 100px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

export const Category = styled.p`
  position: absolute;
  top: 40px;
  left: 108px;
  border-radius: 30px;
  background-color: #fff4df;
  padding: 8px 14px;
  color: #f6b83d;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.24px;

  @media screen and (min-width: 768px) {
    left: 162px;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.28px;
  }
`;

export const Title = styled.p`
  color: #2b2b2a;
  font-weight: 700;
  line-height: 20px;
  margin: 20px auto 10px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    margin: 16px auto 10px;
  }
`;

export const DetailsWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 27px;
  margin-bottom: 18px;
`;

export const DetailsTitle = styled.p`
  color: rgba(38, 38, 38, 0.5);
  font-size: 10px;
  line-height: 14px;
  letter-spacing: -0.2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    color: #262626;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: -0.24px;
    text-align: center;
  }
`;

export const Comment = styled.p`
  overflow: hidden;
  color: #2b2b2a;
  text-overflow: ellipsis;
  text-align: center;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.28px;
  margin-bottom: 40px;
`;

export const ButtonWrap = styled.div`
  display: flex;
  gap: 8px;

  @media screen and (min-width: 768px) {
    justify-content: center;
    gap: 10px;
  }
`;

export const ButtonFavorite = styled.button`
  color: #ffffff;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.48px;
  width: 135px;
  height: 44px;
  border-radius: 30px;
  background: #f6b83d;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  transition: transform 150ms linear, background-color 150ms linear;

  &:hover {
    transform: scale(1.1);
    background-color: #f9b020;
  }

  @media screen and (min-width: 768px) {
    width: 160px;
    height: 48px;
  }
`;

export const ButtonContact = styled.button`
  color: #f6b83d;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.48px;
  width: 134px;
  height: 44px;
  border-radius: 30px;
  background-color: #fff4df;
  transition: transform 150ms linear, background-color 150ms linear;
  margin: ${({ isprofile }) => (isprofile === "true" ? "0 auto" : "")};

  &:hover {
    transform: scale(1.1);
    background-color: #fbe7c1;
  }

  @media screen and (min-width: 768px) {
    width: 160px;
    height: 48px;
  }
`;
