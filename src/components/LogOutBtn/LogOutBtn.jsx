import React, { useState } from "react";
import ModalApproveAction from "../ModalApproveAction/ModalApproveAction";
import { Button, ButtonWrap } from "./LogOutBtn.styled";

const LogOutBtn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ButtonWrap>
      <Button onClick={openModal}>Log out</Button>
      {isModalOpen && <ModalApproveAction onClose={closeModal} />}
    </ButtonWrap>
  );
};

export default LogOutBtn;
