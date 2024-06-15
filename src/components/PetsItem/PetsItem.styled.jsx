import styled from "styled-components";

export const PetsItemContainer = styled.div`
  border-radius: 20px;
  border: 1px solid rgba(38, 38, 38, 0.1);
  margin-bottom: 14px;
  padding: 16px;
  position: relative;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: 768px) {
    width: calc((100% - 14px) / 2);
    margin-bottom: 0;
    padding: 22px 16px;
  }

  @media screen and (min-width: 1280px) {
    width: 100%;
    padding: 20px;
  }
`;

export const Box = styled.div`
  display: flex;
  gap: 14px;

  @media screen and (min-width: 1280px) {
    gap: 25px;
  }
`;

export const Img = styled.img`
  width: 66px;
  height: 66px;
  border-radius: 100px;

  @media screen and (min-width: 768px) {
    width: 75px;
    height: 75px;
  }

  @media screen and (min-width: 1280px) {
    width: 90px;
    height: 90px;
  }
`;

export const Details = styled.div`
  @media screen and (min-width: 1280px) {
    align-content: center;
  }
`;

export const Title = styled.p`
  overflow: hidden;
  color: #2b2b2a;
  text-overflow: ellipsis;
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    margin-bottom: 12px;
  }
`;

export const DetailsItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    gap: 27px;
  }
`;

export const Text = styled.p`
  color: rgba(38, 38, 38, 0.5);
  font-size: 10px;
  line-height: 14px;
  letter-spacing: -0.2px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Span = styled.span`
  color: #262626;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.24px;
`;

export const Button = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 30px;
  height: 30px;
  border-radius: 30px;
  background: #fff4df;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 150ms linear, background-color 150ms linear;

  &:hover {
    transform: scale(1.1);
    background-color: #fbe7c1;
  }

  @media screen and (min-width: 768px) {
    width: 30px;
    height: 30px;

    svg {
      width: 18px;
      height: 18px;
    }
  }

  @media screen and (min-width: 1280px) {
    width: 38px;
    height: 38px;
    top: 20px;
    right: 20px;
  }
`;
