import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../../store/auth/operations";
import { selectUser } from "../../store/auth/selectors";
import UserCard from "../../components/UserCard/UserCard";
import MyNotices from "../../components/MyNotices/MyNotices";
import { ProfileContainer } from "./Profile.styled";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <ProfileContainer>
      <UserCard user={user} />
      <MyNotices />
    </ProfileContainer>
  );
};

export default Profile;
