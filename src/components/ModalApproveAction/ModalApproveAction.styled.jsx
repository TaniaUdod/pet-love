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
    max-width: 448px;
    padding: 80px;
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

export const Span = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 50px;
  background-color: #fff4df;
  margin: 0 auto;
`;

export const Text = styled.p`
  font-size: 20px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.6px;
  text-align: center;
  margin: 20px 0 28px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -0.72px;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  gap: 8px;
`;

export const ButtonConfirm = styled.button`
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: -0.42px;
  width: 137px;
  height: 42px;
  border-radius: 30px;
  background: #f6b83d;
  transition: transform 150ms linear;

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (min-width: 768px) {
    width: 140px;
    height: 48px;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.48px;
  }
`;

export const ButtonCancel = styled.button`
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: -0.42px;
  width: 134px;
  height: 42px;
  border-radius: 30px;
  background: rgba(38, 38, 38, 0.05);
  transition: transform 150ms linear;

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (min-width: 768px) {
    width: 140px;
    height: 48px;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.48px;
  }
`;
