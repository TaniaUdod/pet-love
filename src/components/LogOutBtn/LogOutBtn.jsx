import React, { useState } from "react";
import ModalApproveAction from "../ModalApproveAction/ModalApproveAction";

const LogOutBtn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button onClick={openModal}>Log out</button>
      {isModalOpen && <ModalApproveAction onClose={closeModal} />}
    </>
  );
};

export default LogOutBtn;
