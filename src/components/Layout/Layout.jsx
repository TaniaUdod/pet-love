import React, { Suspense, useEffect, useRef, useState } from "react";
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
  const menuRef = useRef(null);
  const location = useLocation();
  const ishome = location.pathname === "/";

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Container>
      <Header ishome={ishome.toString()}>
        <Link to="/">
          <LogoWrap>
            <LogoText ishome={ishome.toString()}>petl</LogoText>
            <svg fill={ishome ? "#FFFFFF" : "#F6B83D"}>
              <use href={`${sprite}#icon-logo`} />
            </svg>
            <LogoText ishome={ishome.toString()}>ve</LogoText>
          </LogoWrap>
        </Link>

        <Nav>
          <LinkStyled to="/news" ishome={ishome.toString()}>
            News
          </LinkStyled>
          <LinkStyled to="/notices" ishome={ishome.toString()}>
            Find pet
          </LinkStyled>
          <LinkStyled to="/friends" ishome={ishome.toString()}>
            Our friends
          </LinkStyled>
        </Nav>
        {isLoggedIn ? (
          <UserNav ishome={ishome.toString()} />
        ) : (
          <AuthNav ishome={ishome.toString()} />
        )}

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

      <BurgerMenu open={isMenuOpen} ref={menuRef}>
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
            {isModalOpen && <ModalApproveAction onClose={closeMenu} />}
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
