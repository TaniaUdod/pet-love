import styled, { css } from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 446px;
    margin: 0 auto;
  }
`;

export const PageButton = styled.button`
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: 1px solid rgba(38, 38, 38, 0.2);
  border-radius: 50%;
  cursor: pointer;

  &:disabled {
    border: 1px solid rgba(38, 38, 38, 0.05);
    cursor: not-allowed;
    opacity: 0.5;
  }

  ${({ active }) =>
    active === "true" &&
    css`
      background-color: #f6b83d;
      color: #ffffff;
      border: none;
    `}
`;

export const Ellipsis = styled.span`
  font-size: 16px;
  line-height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: 1px solid rgba(38, 38, 38, 0.05);
  border-radius: 50%;
`;
