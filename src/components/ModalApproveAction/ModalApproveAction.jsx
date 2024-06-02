import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../../store/auth/operations";
import cat from "../../images/cat.png";
import cat2x from "../../images/cat@2x.png";
import sprite from "../../images/sprite.svg";
import {
  CloseButton,
  ModalContent,
  ModalOverlay,
} from "./ModalApproveAction.styled";

const ModalApproveAction = (onClose) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    onClose();
  };

  const handleConfirm = () => {
    dispatch(logOut());
    onClose();
  };

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
      document.body.style.overflow = "visible";
    }
  };

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [onClose]);

  return createPortal(
    <ModalOverlay onClick={handleBackdropClick}>
      <ModalContent>
        <CloseButton onClick={handleClose}>
          <svg>
            <use href={`${sprite}#icon-close`} />
          </svg>
        </CloseButton>
        <div>
          <picture style={{ margin: "0 auto" }}>
            <source srcSet={cat2x} media="(min-resolution: 192dpi)" />
            <img src={cat} alt="cat" width="44px" height="44px" />
          </picture>
          <p>Already leaving?</p>
          <button onClick={handleConfirm}>Yes</button>
          <button onClick={handleClose}>Cancel</button>
        </div>
      </ModalContent>
    </ModalOverlay>,
    document.getElementById("modal-root")
  );
};

export default ModalApproveAction;
