import React, { Suspense, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../store/auth/selectors";
import sprite from "../../images/sprite.svg";
import Loader from "../Loader/Loader";
import AuthNav from "../AuthNav/AuthNav";
import UserNav from "../UserNav/UserNav";
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
  MobLinkLogin,
  MobLinkNav,
  MobLinkRegister,
  MobNav,
  Nav,
} from "./Layout.styled";

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <Container>
      <Header>
        <Link to="/">
          <LogoWrap>
            <LogoText>petl</LogoText>
            <svg width="23" height="23">
              <use href={`${sprite}#icon-logo`} />
            </svg>
            <LogoText>ve</LogoText>
          </LogoWrap>
        </Link>

        <Nav>
          <LinkStyled to="/news">News</LinkStyled>
          <LinkStyled to="/notices">Find pet</LinkStyled>
          <LinkStyled to="/friends">Our friends</LinkStyled>
        </Nav>
        {isLoggedIn ? <UserNav /> : <AuthNav />}

        <BurgerButton type="button" onClick={toggleMenu}>
          <svg width="32" height="32" fill="none" stroke="#262626">
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

        <MobLinkNav>
          <MobLinkLogin to="/login" onClick={closeMenu}>
            Log In
          </MobLinkLogin>
          <MobLinkRegister to="/register" onClick={closeMenu}>
            Registration
          </MobLinkRegister>
        </MobLinkNav>
        {/* {isLoggedIn ? <UserNav /> : <AuthNav />} */}
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
