import React from "react";
import sprite from "../../images/sprite.svg";
import {
  ButtonUpload,
  Img,
  InfoItem,
  InfoList,
  SpanImg,
  Title,
} from "./UserBlock.styled";

const UserBlock = ({ setEditModalOpen, user }) => {
  return (
    <>
      {user.avatar ? (
        <Img src={user.avatar} alt={user.name} />
      ) : (
        <>
          <SpanImg>
            <svg width="40" height="40" fill="#f6b83d" stroke="#f6b83d">
              <use href={`${sprite}#icon-user`} />
            </svg>
          </SpanImg>
          <ButtonUpload type="button" onClick={() => setEditModalOpen(true)}>
            Upload photo
          </ButtonUpload>
        </>
      )}

      <Title>My information</Title>
      <InfoList>
        <InfoItem>
          <p>{user.name}</p>
        </InfoItem>
        <InfoItem>
          <p>{user.email}</p>
        </InfoItem>
        <InfoItem>
          <p>{user.phone || "+380"}</p>
        </InfoItem>
      </InfoList>
    </>
  );
};

export default UserBlock;
