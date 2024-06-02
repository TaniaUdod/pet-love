import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/auth/selectors";
import sprite from "../../images/sprite.svg";

const UserBar = () => {
  const user = useSelector(selectUser);
  const avatar = user.avatar || (
    <svg width="24" height="24">
      <use href={`${sprite}#icon-user`} />
    </svg>
  );

  return (
    <>
      <Link to="/profile">
        <img src={avatar} alt="user avatar" />
        <p>{user.name}</p>
      </Link>
    </>
  );
};

export default UserBar;
