import React, { Suspense, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../store/auth/selectors";
import sprite from "../../images/sprite.svg";
import Loader from "../Loader/Loader";
import AuthNav from "../AuthNav/AuthNav";
import UserNav from "../UserNav/UserNav";
import ModalApproveAction from "../ModalApproveAction/ModalApproveAction";
import {
  BurgerButton,
  BurgerMenu,
  CloseButton,
  Container,
  Header,
  LinkMobStyled,
  LinkStyled,
  LogoText,
  LogoWrap,
  LogoutButton,
  MobLinkLogin,
  MobLinkNav,
  MobLinkRegister,
  MobNav,
  Nav,
} from "./Layout.styled";

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const location = useLocation();
  const ishome = location.pathname === "/" ? true : false;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <Header ishome={ishome}>
        <Link to="/">
          <LogoWrap>
            <LogoText ishome={ishome}>petl</LogoText>
            <svg fill={ishome ? "#FFFFFF" : "#F6B83D"}>
              <use href={`${sprite}#icon-logo`} />
            </svg>
            <LogoText ishome={ishome}>ve</LogoText>
          </LogoWrap>
        </Link>

        <Nav>
          <LinkStyled to="/news" ishome={ishome}>
            News
          </LinkStyled>
          <LinkStyled to="/notices" ishome={ishome}>
            Find pet
          </LinkStyled>
          <LinkStyled to="/friends" ishome={ishome}>
            Our friends
          </LinkStyled>
        </Nav>
        {isLoggedIn ? <UserNav ishome={ishome} /> : <AuthNav ishome={ishome} />}

        <BurgerButton type="button" onClick={toggleMenu}>
          <svg
            width="32"
            height="32"
            fill="none"
            stroke={ishome ? "#FFFFFF" : "#262626"}
            className={ishome ? "home" : ""}
          >
            <use href={`${sprite}#icon-menu`} />
          </svg>
        </BurgerButton>
      </Header>

      <BurgerMenu open={isMenuOpen}>
        <CloseButton type="button" onClick={closeMenu}>
          <svg width="32" height="32" fill="none" stroke="#262626">
            <use href={`${sprite}#icon-close`} />
          </svg>
        </CloseButton>

        <MobNav>
          <LinkMobStyled to="/news" onClick={closeMenu}>
            News
          </LinkMobStyled>
          <LinkMobStyled to="/notices" onClick={closeMenu}>
            Find pet
          </LinkMobStyled>
          <LinkMobStyled to="/friends" onClick={closeMenu}>
            Our friends
          </LinkMobStyled>
        </MobNav>

        {isLoggedIn ? (
          <>
            <LogoutButton onClick={openModal}>Log out</LogoutButton>
            {isModalOpen && <ModalApproveAction onClose={closeModal} />}
          </>
        ) : (
          <MobLinkNav>
            <MobLinkLogin to="/login" onClick={closeMenu}>
              Log In
            </MobLinkLogin>
            <MobLinkRegister to="/register" onClick={closeMenu}>
              Registration
            </MobLinkRegister>
          </MobLinkNav>
        )}
      </BurgerMenu>

      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};

export default Layout;
