import React, { useState } from "react";
import sprite from "../../images/sprite.svg";
import ModalApproveAction from "../ModalApproveAction/ModalApproveAction";
import ModalEditUser from "../ModalEditUser/ModalEditUser";
import UserBlock from "../UserBlock/UserBlock";
import PetsBlock from "../PetsBlock/PetsBlock";
import {
  EditUserBtn,
  LogOutBtn,
  UserCardContainer,
  UserCardLogo,
} from "./UserCard.styled";

const UserCard = ({ user }) => {
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);

  const [imageURL, setImageURL] = useState(null);

  const handleEditClick = () => setEditModalOpen(true);
  const handleLogoutClick = () => setLogoutModalOpen(true);

  const closeModal = () => {
    setLogoutModalOpen(false);
    setEditModalOpen(false);
  };

  return (
    <UserCardContainer>
      <UserCardLogo>
        <p>User</p>
        <svg width="18" height="18">
          <use href={`${sprite}#icon-user`} />
        </svg>
      </UserCardLogo>

      <EditUserBtn type="button" onClick={handleEditClick}>
        <svg width="18" height="18">
          <use href={`${sprite}#icon-edit`} />
        </svg>
      </EditUserBtn>

      <UserBlock user={user} setEditModalOpen={setEditModalOpen} />
      <PetsBlock />

      <LogOutBtn onClick={handleLogoutClick}>Log out</LogOutBtn>

      {isEditModalOpen && (
        <ModalEditUser
          user={user}
          imageURL={imageURL}
          setImageURL={setImageURL}
          onClose={closeModal}
          setEditModalOpen={setEditModalOpen}
        />
      )}
      {isLogoutModalOpen && <ModalApproveAction onClose={closeModal} />}
    </UserCardContainer>
  );
};

export default UserCard;
