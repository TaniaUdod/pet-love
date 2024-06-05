import styled from "styled-components";

export const ButtonWrap = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const Button = styled.button`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: -0.48px;
    text-transform: uppercase;
    width: 136px;
    height: 50px;
    border-radius: 30px;
    background-color: #f6b83d;
    transition: transform 150ms linear;

    &:hover {
      transform: scale(1.1);
    }
  }
`;
