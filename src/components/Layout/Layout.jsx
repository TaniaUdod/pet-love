import React, { Suspense } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { selectIsLoggedIn } from "../../store/auth/selectors";
import { useSelector } from "react-redux";
import sprite from "../../images/sprite.svg";
import Loader from "../Loader/Loader";
import AuthNav from "../AuthNav/AuthNav";
import UserNav from "../UserNav/UserNav";

const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <header>
        <Link to="/">
          <div>
            <p>petl</p>
            <svg width="23" height="23">
              <use href={`${sprite}#icon-logo`} />
            </svg>
            <p>ve</p>
          </div>
        </Link>
        <nav>
          <NavLink to="/news">News</NavLink>
          <NavLink to="/notices">Find pet</NavLink>
          <NavLink to="/friends">Our friends</NavLink>
        </nav>
        {isLoggedIn ? <UserNav /> : <AuthNav />}
      </header>

      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
