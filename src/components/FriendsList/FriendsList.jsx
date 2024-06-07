import React from "react";
import FriendsItem from "../FriendsItem/FriendsItem";
import { FriendsListContainer } from "./FriendsList.styled";

const FriendsList = ({ friends }) => {
  return (
    <FriendsListContainer>
      {friends.map((friend) => (
        <FriendsItem key={friend._id} {...friend} />
      ))}
    </FriendsListContainer>
  );
};

export default FriendsList;
