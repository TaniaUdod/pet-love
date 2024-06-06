import styled from "styled-components";

export const InputWrap = styled.div`
  position: relative;
`;

export const Input = styled.input`
  color: rgba(38, 38, 38, 0.5);
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.42px;
  border-radius: 30px;
  border: 1px solid rgba(38, 38, 38, 0.15);
  padding: 12px;
  margin: 20px 0 24px;
  width: 100%;

  &:focus {
    border: 1px solid #f6b83d;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.48px;
    width: 230px;
    height: 48px;
    padding: 14px;
    margin: 0;
  }
`;

export const ButtonSearch = styled.button`
  svg {
    position: absolute;
    right: 12px;
    top: 32px;
    width: 18px;
    height: 18px;
  }

  @media screen and (min-width: 768px) {
    svg {
      right: 14px;
      top: 16px;
    }
  }
`;

export const ButtonClear = styled.button`
  svg {
    position: absolute;
    right: 34px;
    top: 32px;
    width: 18px;
    height: 18px;
  }

  @media screen and (min-width: 768px) {
    svg {
      right: 40px;
      top: 16px;
    }
  }
`;
