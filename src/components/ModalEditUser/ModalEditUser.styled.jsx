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
  padding: 40px 20px;
  display: inline-flex;
  flex-direction: column;
  max-width: 335px;
  width: 95%;
  max-height: 95vh;
  overflow: overlay;

  @media screen and (min-width: 768px) {
    max-width: 480px;
    padding: 50px;
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

export const Title = styled.p`
  color: #2b2b2a;
  font-size: 20px;
  font-weight: 700;
  line-height: 20px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const Img = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 100px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 86px;
    height: 86px;
  }
`;

export const SpanImg = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 94px;
  height: 94px;
  border-radius: 100px;
  background-color: #fff4df;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12px 0 14px;

  @media screen and (min-width: 768px) {
    display: block;
    margin: 12px 0 20px;
  }
`;

export const Label = styled.label`
  position: relative;

  svg {
    position: absolute;
    top: 0;
    right: 12px;
  }

  @media screen and (min-width: 768px) {
    svg {
      right: 0px;
    }
  }
`;

export const InputAvatarURL = styled.input`
  width: 100%;
  max-width: 161px;
  height: 42px;
  border-radius: 30px;
  border: 1px solid #f6b83d;
  padding: 13px 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.24px;

  @media screen and (min-width: 768px) {
    max-width: 226px;
    height: 42px;
    padding: 12px 20px;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.28px;
    margin-right: 8px;
  }
`;

export const InputAvatar = styled.input`
  max-width: 126px;

  &::-webkit-file-upload-button {
    opacity: 0;
    visibility: hidden;
    width: 1px !important;
  }

  &::before {
    content: "Upload photo";
    width: 126px;
    height: 42px;
    border-radius: 30px;
    background-color: #fff4df;
    color: #262626;
    font-weight: 500;
    font-size: 12px;
    line-height: 1.33;
    letter-spacing: -0.02em;
    cursor: pointer;
    padding-left: 14px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: absolute;
    top: -12px;
    left: 0;
    transition: background-color 150ms linear;
  }

  &:hover {
    &::before {
      background-color: #fbe7c1;
    }
  }

  @media screen and (min-width: 768px) {
    &::before {
      width: 146px;
      font-size: 14px;
      line-height: 18px;
      letter-spacing: -0.28px;
      padding-left: 16px;
    }
  }
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.42px;
  border-radius: 30px;
  border: 1px solid #f6b83d;
  padding: 12px;

  @media screen and (min-width: 768px) {
    height: 52px;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.48px;
    padding: 16px;
  }
`;

export const Error = styled.p`
  font-size: 10px;
  color: #ef2447;
  position: absolute;
`;

export const Button = styled.button`
  width: 100%;
  height: 42px;
  outline: none;
  border: none;
  border-radius: 30px;
  background-color: #f6b83d;
  color: #ffffff;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.42px;
  margin-top: 21px;
  transition: transform 150ms linear, background-color 150ms linear;

  &:hover {
    transform: scale(1.1);
    background-color: #f9b020;
  }

  @media screen and (min-width: 768px) {
    height: 52px;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.48px;
    margin-top: 40px;
  }
`;
