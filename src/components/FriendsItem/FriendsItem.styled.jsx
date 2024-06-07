import styled from "styled-components";

export const FriendsItemWrap = styled.div`
  position: relative;
  border-radius: 15px;
  background-color: #fff;
  padding: 40px 20px;
  display: flex;
  gap: 14px;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: 768px) {
    width: calc((100% - 20px) / 2);
    margin-bottom: 0;
    gap: 16px;
  }

  @media screen and (min-width: 1280px) {
    width: calc((100% - 20px) / 3);
    max-width: 371px;
    gap: 20px;
  }
`;

export const Img = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 80px;

  @media screen and (min-width: 768px) {
    width: 90px;
    height: 90px;
    border-radius: 90px;
  }
`;

export const Title = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.64px;
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 26px;
    letter-spacing: -0.8px;
    margin-bottom: 20px;
  }
`;

export const Text = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.28px;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }

  span {
    color: rgba(38, 38, 38, 0.5);
  }

  a {
    transition: color 150ms linear;
  }

  a:hover {
    color: #f6b83d;
  }
`;

export const Details = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 8px;
  border-radius: 30px;
  background-color: #fff4df;
  color: #f6b83d;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.24px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.28px;
  }
`;
