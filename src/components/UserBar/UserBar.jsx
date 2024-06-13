import React from "react";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../store/auth/selectors";
import sprite from "../../images/sprite.svg";
import { Button, Img, StyledLink, UserName } from "./UserBar.styled";

const UserBar = ({ ishome }) => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (!isLoggedIn) {
    return null;
  }

  return (
    <StyledLink to="/profile">
      <Button type="button">
        {user.avatar ? (
          <Img src={user.avatar} alt="user avatar" />
        ) : (
          <svg width="20" height="20" fill="#f6b83d" stroke="#f6b83d">
            <use href={`${sprite}#icon-user`} />
          </svg>
        )}
      </Button>
      <UserName ishome={ishome.toString()}>{user.name}</UserName>
    </StyledLink>
  );
};

export default UserBar;
