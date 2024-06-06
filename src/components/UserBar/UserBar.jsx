import React from "react";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../store/auth/selectors";
import sprite from "../../images/sprite.svg";
import { Button, StyledLink, UserName } from "./UserBar.styled";

const UserBar = ({ ishome }) => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (!isLoggedIn) {
    return null;
  }

  const avatar = user.avatar ? (
    <img src={user.avatar} alt="user avatar" />
  ) : (
    <svg width="20" height="20">
      <use href={`${sprite}#icon-user`} />
    </svg>
  );

  return (
    <StyledLink to="/profile">
      <Button type="button">{avatar}</Button>
      <UserName ishome={ishome.toString()}>{user.name}</UserName>
    </StyledLink>
  );
};

export default UserBar;
