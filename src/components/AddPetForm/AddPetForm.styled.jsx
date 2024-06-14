import styled from "styled-components";
import { Link } from "react-router-dom";
import ReactDatePicker from "react-datepicker";

export const AddPetFormContainer = styled.div`
  background-color: #ffffff;
  border-radius: 30px;
  padding: 28px 20px 20px;
  margin: 10px 0 20px;

  @media screen and (min-width: 768px) {
    border-radius: 60px;
    padding: 40px 136px 40px;
    margin: 16px 0 32px;
  }

  @media screen and (min-width: 1280px) {
    margin: 0px;
    width: 592px;
    height: 654px;
    padding: 60px 80px;
  }
`;

export const Title = styled.p`
  font-size: 28px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.84px;
  margin-bottom: 24px;

  span {
    color: rgba(43, 43, 42, 0.4);
    font-size: 14px;
    font-weight: 700;
    line-height: 18px;
    margin-left: 8px;
  }

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 32px;
    letter-spacing: -0.96px;
    margin-bottom: 40px;

    span {
      font-size: 16px;
      line-height: 20px;
    }
  }
`;

export const GendersList = styled.ul`
  display: flex;
  align-items: center;
  gap: 8px;

  li {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 150ms linear;
  }

  @media screen and (min-width: 768px) {
    li {
      width: 40px;
      height: 40px;
    }

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export const FemaleLi = styled.li`
  background-color: ${({ datavalue }) =>
    datavalue === "female" ? "#f43f5e" : "rgba(244, 63, 94, 0.10)"};

  svg {
    fill: none;
    stroke: ${({ datavalue }) =>
      datavalue === "female" ? "#FFFFFF" : "#f43f5e"};
    transition: transform 150ms linear, background-color 150ms linear;
  }

  &:hover {
    transform: scale(1.1);
    background-color: #f43f5e;

    svg {
      stroke: #ffffff;
    }
  }
`;

export const MaleLi = styled.li`
  background-color: ${({ datavalue }) =>
    datavalue === "male" ? "#54adff" : "rgba(84, 173, 255, 0.10)"};

  svg {
    fill: none;
    stroke: ${({ datavalue }) =>
      datavalue === "male" ? "#FFFFFF" : "#54adff"};
    transition: transform 150ms linear, background-color 150ms linear;
  }

  &:hover {
    transform: scale(1.1);
    background-color: #54adff;

    svg {
      stroke: #ffffff;
    }
  }
`;

export const MultipleLi = styled.li`
  background-color: ${({ datavalue }) =>
    datavalue === "multiple" ? "#F6B83D" : "#FFF4DF"};

  svg {
    fill: ${({ datavalue }) =>
      datavalue === "multiple" ? "#FFFFFF" : "#F6B83D"};
    transition: transform 150ms linear, background-color 150ms linear;
  }

  &:hover {
    transform: scale(1.1);
    background-color: #f6b83d;

    svg {
      fill: #ffffff;
    }
  }
`;

export const Image = styled.div`
  width: 68px;
  height: 68px;
  border-radius: 50%;
  background-color: #fff4df;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8px auto 16px;

  img {
    object-fit: cover;
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 86px;
    height: 86px;
    margin: -18px auto 12px;

    svg {
      width: 44px;
      height: 44px;
    }
  }

  @media screen and (min-width: 1280px) {
    margin: -24px auto 12px;
  }
`;

export const UploadContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    margin-bottom: 18px;
  }
`;

export const InputLabel = styled.label`
  position: relative;
  width: 100%;
  max-width: 170px;

  @media screen and (min-width: 768px) {
    max-width: 278px;
  }
`;

export const Label = styled.label`
  position: relative;
  width: 100%;
  max-width: 117px;

  svg {
    position: absolute;
    top: 3px;
    right: 10px;
  }

  @media screen and (min-width: 768px) {
    max-width: 146px;

    svg {
      right: 16px;
    }
  }
`;

export const InputPetImageURL = styled.input`
  width: 100%;
  height: 36px;
  border-radius: 30px;
  border: 1px solid rgba(38, 38, 38, 0.15);
  padding: 9px 10px;
  transition: border 150ms linear;

  &::placeholder {
    color: rgba(38, 38, 38, 0.5);
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.28px;
  }

  &:focus-within,
  &:hover {
    border: 1px solid #f6b83d;
  }

  @media screen and (min-width: 768px) {
    height: 42px;
    padding: 12px;
  }
`;

export const AddAvatarInput = styled.input`
  width: 100%;

  &::-webkit-file-upload-button {
    opacity: 0;
    visibility: hidden;
    width: 1px !important;
  }

  &::before {
    content: "Upload photo";
    width: 117px;
    height: 36px;
    border-radius: 30px;
    background-color: #fff4df;
    color: #262626;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: -0.24px;
    cursor: pointer;
    padding-left: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: absolute;
    top: -7px;
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
      height: 42px;
      top: -10px;
      font-size: 14px;
      line-height: 18px;
      letter-spacing: -0.28px;
      padding-left: 16px;
    }
  }
`;

export const InputWrap = styled.div`
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    margin-bottom: 18px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  border-radius: 30px;
  border: 1px solid rgba(38, 38, 38, 0.15);
  padding: 12px;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.42px;
  transition: border 150ms linear;

  &::placeholder {
    color: rgba(38, 38, 38, 0.5);
  }

  &:focus-within,
  &:hover {
    border: 1px solid #f6b83d;
  }

  @media screen and (min-width: 768px) {
    height: 52px;
    padding: 16px;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.48px;
  }
`;

export const InvisibleInput = styled.input`
  overflow: hidden;
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
`;

export const BoxContainer = styled.div`
  display: flex;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 12px;
  }
`;

export const DatePickerWrapper = styled.div`
  position: relative;

  svg {
    position: absolute;
    right: 12px;
    top: 12px;
    pointer-events: none;
  }

  @media screen and (min-width: 768px) {
    width: 210px;

    svg {
      right: 16px;
      top: 16px;
    }
  }
`;

export const StyledDatePicker = styled(ReactDatePicker)`
  border-radius: 30px;
  border: 1px solid rgba(38, 38, 38, 0.15);
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.42px;
  padding: 12px;
  max-width: 144px;
  min-width: 116px;
  width: 100%;
  height: 42px;
  cursor: pointer;
  transition: border 150ms linear;

  &:focus-within,
  &:hover {
    border: 1px solid #f6b83d;
  }

  @media screen and (min-width: 768px) {
    max-width: 210px;
    height: 52px;
  }
`;

export const SelectContainer = styled.div`
  position: relative;
  width: 143px;

  svg {
    position: absolute;
    top: 12px;
    right: 12px;
  }

  .css-tj5bde-Svg {
    display: none;
  }

  .css-1u9des2-indicatorSeparator {
    display: none;
  }

  .css-1xc3v61-indicatorContainer {
    padding: 0;
  }

  .css-1fdsijx-ValueContainer {
    padding: 0;
  }

  .css-b62m3t-container {
    width: 100%;
  }

  .css-13cymwt-control {
    border-radius: 30px;
    border: 1px solid rgba(38, 38, 38, 0.15);
    color: rgba(38, 38, 38, 0.5);
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.42px;
    height: 42px;
    cursor: pointer;
  }

  .css-13cymwt-control:hover {
    border-color: transparent;
    height: 42px;
    cursor: pointer;
    transition: border 150ms linear;

    &:focus-within,
    &:hover {
      border: 1px solid #f6b83d;
    }
  }

  .css-t3ipsp-control {
    border-radius: 30px;
    border-color: #f6b83d;
    box-shadow: none;
    height: 42px;
  }

  .css-t3ipsp-control:hover,
  .css-t3ipsp-control:active {
    border-radius: 30px;
    border-color: transparent;
    transition: border 150ms linear;

    &:focus-within,
    &:hover {
      border: 1px solid #f6b83d;
    }
  }

  .css-1dimb5e-singleValue {
    margin-left: 12px;
  }

  .css-1jqq78o-placeholder {
    margin-left: 12px;
    color: unset;
  }

  .css-qbdosj-Input {
    margin-left: 12px;
  }

  .css-1u9des2-indicatorSeparator {
    display: none;
  }

  .css-1xc3v61-indicatorContainer {
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
    max-height: 78px;
    border-radius: 15px;
    border: 1px solid rgba(38, 38, 38, 0.15);
  }

  @media screen and (min-width: 768px) {
    position: relative;
    width: 210px;

    svg {
      position: absolute;
      top: 16px;
      right: 16px;
    }

    .css-13cymwt-control {
      max-width: 210px;
      height: 52px;
    }

    .css-t3ipsp-control {
      height: 52px;
    }

    .css-13cymwt-control:hover {
      height: 52px;
    }

    .css-1n6sfyn-MenuList {
      max-height: 126px;
      font-size: 16px;
      line-height: 20px;
      letter-spacing: -0.48px;
      padding: 14px;
    }
  }
`;

export const Error = styled.p`
  position: absolute;
  font-size: 10px;
  color: #e44848;
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 8px;
  margin-top: 31px;

  @media screen and (min-width: 768px) {
    margin-top: 40px;
  }
`;

export const ButtonBack = styled(Link)`
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: -0.42px;
  padding: 12px 34px;
  border-radius: 30px;
  background-color: rgba(38, 38, 38, 0.05);
  cursor: pointer;
  transition: background-color 150ms linear, transform 150ms linear;

  &:hover {
    transform: scale(1.1);
    background-color: #fbe7c1;
  }

  @media screen and (min-width: 768px) {
    padding: 14px 67px;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.48px;
  }
`;

export const ButtonSubmit = styled.button`
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: -0.42px;
  padding: 12px 26px;
  border-radius: 30px;
  background-color: #f6b83d;
  cursor: pointer;
  transition: background-color 150ms linear, transform 150ms linear;

  &:hover {
    transform: scale(1.1);
    background-color: #f9b020;
  }

  @media screen and (min-width: 768px) {
    padding: 14px 58px;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: -0.48px;
  }
`;
