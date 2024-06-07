import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFriends } from "../../store/friends/selectors";
import { getFriends } from "../../store/friends/operations";
import Title from "../../components/Title/Title";
import FriendsList from "../../components/FriendsList/FriendsList";
import { OurFriendsContainer } from "./OurFriends.styled";

const OurFriends = () => {
  const dispatch = useDispatch();
  const friends = useSelector(selectFriends);

  useEffect(() => {
    dispatch(getFriends());
  }, [dispatch]);

  return (
    <OurFriendsContainer>
      <Title text="Our friends" />
      <FriendsList friends={friends} />
    </OurFriendsContainer>
  );
};

export default OurFriends;
