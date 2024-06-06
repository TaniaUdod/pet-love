import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  max-width: 375px;
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ ishome }) =>
    ishome === "true" ? "28px 20px 20px" : "28px 0 20px"};

  @media screen and (min-width: 768px) {
    padding: ${({ ishome }) => (ishome === "true" ? "32px" : "32px 0")};
  }

  @media screen and (min-width: 1280px) {
    padding: ${({ ishome }) => (ishome === "true" ? "32px 64px" : "32px")};
  }
`;

export const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 150ms linear;

  &:hover {
    transform: scale(1.1);
  }

  svg {
    width: 17px;
    height: 17px;
  }

  @media screen and (min-width: 768px) {
    margin-right: 271px;

    svg {
      width: 23px;
      height: 23px;
    }
  }

  @media screen and (min-width: 1280px) {
    margin-right: 280px;
  }
`;

export const LogoText = styled.p`
  font-size: 20px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.8px;
  color: ${({ ishome }) => (ishome === "true" ? "#ffffff" : "#262626")};

  @media screen and (min-width: 768px) {
    font-size: 28px;
    line-height: 28px;
    letter-spacing: -1.12px;
  }
`;

export const Nav = styled.nav`
  display: none;

  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }
`;

export const LinkStyled = styled(NavLink)`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    line-height: 20px;
    letter-spacing: -0.48px;
    padding: 15px 20px;
    border-radius: 30px;
    border: 1px solid rgba(38, 38, 38, 0.15);
    transition: transform 150ms linear;

    &:hover {
      transform: scale(1.1);
    }

    &.active {
      border-color: #f6b83d;
    }
  }

  @media screen and (min-width: 1280px) {
    border-radius: 30px;
    border: ${({ ishome }) =>
      ishome === "true"
        ? "1px solid rgba(255, 255, 255, 0.40)"
        : "1px solid rgba(38, 38, 38, 0.15)"};
    color: ${({ ishome }) => (ishome === "true" ? "#ffffff" : "#262626")};
  }
`;

export const BurgerButton = styled.button`
  width: 32px;
  height: 32px;
  margin-left: 12px;
  transition: transform 150ms linear;

  &:hover {
    transform: scale(1.1);
  }

  svg {
    transition: stroke 150ms linear;
  }

  svg:hover {
    stroke: #f6b83d;
  }

  svg.home:hover {
    stroke: #ffffff;
  }

  @media screen and (min-width: 768px) {
    margin-left: 16px;
  }

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const BurgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  padding: 28px 20px 40px;
  width: 100%;
  max-width: 218px;
  height: 100%;
  background-color: #ffffff;
  overflow: auto;
  z-index: 1;
  transform: translateX(${(props) => (props.open ? "0" : "100%")});
  transition: transform 250ms ease-in-out;

  @media screen and (min-width: 768px) {
    max-width: 374px;
    padding: 0 49px 40px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  width: 32px;
  height: 32px;
  right: 20px;
  top: 28px;
  transition: transform 150ms linear;

  &:hover {
    transform: scale(1.1);
  }

  svg {
    transition: stroke 150ms linear;
  }

  svg:hover {
    stroke: #f6b83d;
  }

  @media screen and (min-width: 768px) {
    right: 32px;
    top: 39px;
  }
`;

export const MobNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 150px;
  margin-bottom: auto;
`;

export const LinkMobStyled = styled(NavLink)`
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.42px;
  width: 119px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  border: 1px solid rgba(38, 38, 38, 0.15);
  transition: transform 150ms linear;

  &:hover {
    transform: scale(1.1);
  }

  &.active {
    border-color: #f6b83d;
  }
`;

export const LogoutButton = styled.button`
  color: #f6b83d;
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: -0.42px;
  text-transform: uppercase;
  width: 178px;
  height: 42px;
  border-radius: 30px;
  background-color: #fff4df;
  transition: transform 150ms linear;

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (min-width: 768px) {
    margin: 0 auto;
  }
`;

export const MobLinkNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const MobLinkLogin = styled(Link)`
  color: #ffffff;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.48px;
  text-transform: uppercase;
  width: 178px;
  height: 42px;
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
    width: 119px;
    height: 50px;
  }
`;

export const MobLinkRegister = styled(Link)`
  color: #f6b83d;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.48px;
  text-transform: uppercase;
  width: 178px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background-color: #fff4df;
  transition: transform 150ms linear, background-color 150ms linear;

  &:hover {
    transform: scale(1.1);
    background-color: #fbe7c1;
  }

  @media screen and (min-width: 768px) {
    width: 149px;
    height: 50px;
  }
`;
