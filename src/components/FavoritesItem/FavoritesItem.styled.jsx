import styled from "styled-components";

export const FavoritesItemContainer = styled.div`
  border-radius: 16px;
  background: #ffffff;
  padding: 24px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: 768px) {
    width: calc((100% - 20px) / 2);
    margin-bottom: 0;
  }

  @media screen and (min-width: 1280px) {
    width: calc((100% - 24px) / 2);
    max-width: 664px;
  }
`;

export const Img = styled.img`
  width: 287px;
  height: 178px;
  border-radius: 16px;
  margin-bottom: 24px;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    width: 294px;
  }

  @media screen and (min-width: 1280px) {
    width: 315px;
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const Title = styled.p`
  color: #2b2b2a;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const PopularityWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  color: #2b2b2a;
  font-size: 14px;
  line-height: 18px;
`;

export const DetailsWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  margin-bottom: 16px;

  @media screen and (min-width: 1280px) {
    gap: 20px;
  }
`;

export const DetailsTitle = styled.p`
  color: rgba(38, 38, 38, 0.5);
  font-size: 10px;
  line-height: 14px;
  letter-spacing: -0.2px;

  span {
    color: #262626;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: -0.24px;
  }
`;

export const Comment = styled.p`
  overflow: hidden;
  color: #2b2b2a;
  text-overflow: ellipsis;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.28px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`;

export const ButtonMore = styled.button`
  color: #ffffff;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.42px;
  width: 231px;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background-color: #f6b83d;
  transition: transform 150ms linear, background-color 150ms linear;

  &:hover {
    transform: scale(1.1);
    background-color: #f9b020;
  }

  @media screen and (min-width: 768px) {
    width: 236px;
    height: 48px;
  }

  @media screen and (min-width: 1280px) {
    width: 257px;
  }
`;

export const ButtonFavorite = styled.button`
  border-radius: 30px;
  background-color: #fff4df;
  padding: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 150ms linear, background-color 150ms linear;

  &:hover {
    transform: scale(1.1);
    background-color: #fbe7c1;
  }

  @media screen and (min-width: 768px) {
    padding: 15px;
  }
`;
