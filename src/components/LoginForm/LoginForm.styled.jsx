import styled from "styled-components";

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`;

export const Input = styled.input`
  padding: 12px;
  color: rgba(38, 38, 38, 0.5);
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.42px;
  border-radius: 30px;
  border: 1px solid
    ${(props) => (props.haserror ? "#ef2447" : "rgba(38, 38, 38, 0.15)")};
  /* border-color: ${({ secure }) =>
    secure ? "#08aa83" : "rgba(38, 38, 38, 0.15)"}; */
  width: 100%;

  @media screen and (min-width: 768px) {
    padding: 16px;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.48px;
  }

  @media screen and (min-width: 1280px) {
    width: 424px;
  }
`;

export const Error = styled.p`
  color: #ef2447;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: -0.3px;
  margin-left: 12px;

  @media screen and (min-width: 768px) {
    font-size: 12px;
    line-height: 14px;
    letter-spacing: -0.36px;
    margin-left: 16px;
    margin-top: 4px;
  }
`;

export const SecureMessage = styled.p`
  color: #08aa83;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: -0.3px;
  margin-left: 12px;

  @media screen and (min-width: 768px) {
    font-size: 12px;
    line-height: 14px;
    letter-spacing: -0.36px;
    margin-left: 16px;
    margin-top: 4px;
  }
`;

export const EmailWrap = styled.div`
  position: relative;

  svg {
    position: absolute;
    right: 12px;
    top: 14px;
    width: 18px;
    height: 18px;
  }

  @media screen and (min-width: 768px) {
    svg {
      right: 16px;
      top: 15px;
      width: 22px;
      height: 22px;
    }
  }
`;

export const PasswordWrap = styled.div`
  position: relative;

  svg {
    position: absolute;
    right: 12px;
    top: 14px;
    width: 18px;
    height: 18px;
    cursor: pointer;
  }

  div > svg {
    position: absolute;
    right: 40px;
    top: 14px;
    width: 18px;
    height: 18px;
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    svg {
      right: 16px;
      top: 15px;
      width: 22px;
      height: 22px;
    }

    div > svg {
      right: 50px;
      top: 15px;
      width: 22px;
      height: 22px;
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  max-width: 295px;
  height: 42px;
  border-radius: 30px;
  background-color: #f6b83d;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: -0.42px;
  text-transform: uppercase;
  margin-top: 40px;
  transition: transform 150ms linear, background-color 150ms linear;

  &:hover {
    transform: scale(1.1);
    background-color: #f9b020;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.48px;
    max-width: 424px;
    height: 52px;
    margin-top: 64px;
  }
`;
