import styled from "styled-components";

export const NoticesFiltersContainer = styled.div`
  margin: 40px 0 40px;
  border-radius: 30px;
  background-color: #fff4df;
  padding: 20px;
  position: relative;

  .css-b62m3t-container {
    width: 100%;
  }

  .css-13cymwt-control {
    border-radius: 30px;
    border-color: transparent;
    height: 42px;
  }

  .css-13cymwt-control:hover {
    border-color: transparent;
    cursor: pointer;
  }

  .css-t3ipsp-control {
    border-radius: 30px;
    border-color: transparent;
    box-shadow: none;
    height: 42px;
  }

  .css-t3ipsp-control:hover,
  .css-t3ipsp-control:active {
    border-radius: 30px;
    border-color: transparent;
  }

  .css-1u9des2-indicatorSeparator {
    display: none;
  }

  .css-1xc3v61-indicatorContainer {
    padding: 12px 12px 12px 0;
    color: #262626;
  }

  .css-1fdsijx-ValueContainer {
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.42px;
  }

  .css-tr4s17-option {
    color: #f6b83d;
    background-color: transparent;
    padding: 0;
  }

  .css-10wo9uf-option {
    padding: 0;
  }

  .css-d7l1ni-option {
    background-color: transparent;
    cursor: pointer;
    padding: 0;
    color: #f6b83d;
  }

  .css-d7l1ni-option:hover,
  .css-d7l1ni-option:active {
    background-color: transparent;
    cursor: pointer;
  }

  .css-1nmdiq5-menu {
    border-radius: 15px;
    box-shadow: none;
    margin-top: 4px;
  }

  .css-1n6sfyn-MenuList {
    color: rgba(38, 38, 38, 0.6);
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.42px;
    display: flex;
    flex-direction: column;
    padding: 12px;
    gap: 8px;
  }

  @media screen and (min-width: 768px) {
    margin: 44px 0 32px;
    padding: 40px 32px;

    .css-t3ipsp-control {
      height: 48px;
    }

    .css-13cymwt-control {
      height: 48px;
    }

    .css-1fdsijx-ValueContainer {
      font-size: 16px;
      line-height: 20px;
      letter-spacing: -0.48px;
    }
  }

  @media screen and (min-width: 1280px) {
    margin: 40px -32px;
  }
`;

export const AllFilters = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
  }
`;

export const FilterWrap = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 16px;
  }
`;

export const FilterBottomWrap = styled.div`
  .css-13cymwt-control {
    height: 42px;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 16px;
    margin-bottom: 20px;

    .css-b62m3t-container {
      width: 190px;
    }

    .css-13cymwt-control {
      height: 48px;
    }
  }
`;

export const CategoryWrap = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    gap: 16px;
    margin-bottom: 16px;

    .css-b62m3t-container {
      width: 170px;
    }
  }

  @media screen and (min-width: 1280px) {
    margin-right: 16px;

    .css-b62m3t-container {
      width: 200px;
    }
  }
`;

export const LocationsWrap = styled.div`
  margin: 12px 0 20px;
  position: relative;

  .css-tj5bde-Svg {
    display: none;
  }

  svg {
    position: absolute;
    right: 12px;
    top: 12px;
    width: 18px;
    height: 18px;
  }

  @media screen and (min-width: 768px) {
    margin: 0;

    svg {
      top: 14px;
    }

    .css-13cymwt-control {
      width: 227px;
    }

    .css-b62m3t-container {
      width: 227px;
    }
  }
`;

export const ButtonClear = styled.button`
  position: absolute;
  right: 34px;
  top: 12px;
  width: 18px;
  height: 18px;

  svg {
    position: absolute;
    right: 0;
    top: 0;
    width: 18px;
    height: 18px;
  }

  @media screen and (min-width: 768px) {
    svg {
      top: 2px;
    }
  }
`;

export const Hr = styled.hr`
  margin: 0 0 20px;
  border: 0;
  border-top: 1px solid rgba(38, 38, 38, 0.1);
`;

export const RadioButtonWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  li {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
    border-radius: 30px;
    background-color: #ffffff;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.42px;
    transition: background-color 150ms linear, color 150ms linear;
    cursor: pointer;

    &:hover {
      background-color: #f6b83d;
      color: #ffffff;
    }

    &.checked {
      background-color: #f6b83d;
      color: #ffffff;
    }

    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      width: 100%;
      height: 100%;
    }

    input:checked + label {
      background-color: #f6b83d;
      color: #ffffff;
    }

    label {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: background-color 150ms linear, color 150ms linear;
    }

    button {
      position: relative;
      z-index: 1;
      background-color: none;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 6px;
    }

    svg {
      display: block;
    }
  }

  @media screen and (min-width: 768px) {
    gap: 8px;

    li {
      padding: 14px;
      font-size: 16px;
      line-height: 20px;
      letter-spacing: -0.48px;
    }
  }
`;

export const ResetButton = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: -0.42px;
  width: 100px;
  height: 42px;
  border-radius: 30px;
  background-color: #f6b83d;
  transition: transform 150ms linear;

  &:hover {
    transform: scale(1.1);
  }
`;
