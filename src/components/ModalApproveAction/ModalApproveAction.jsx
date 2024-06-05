import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../../store/auth/operations";
import cat from "../../images/cat.png";
import cat2x from "../../images/cat@2x.png";
import sprite from "../../images/sprite.svg";
import {
  ButtonCancel,
  ButtonConfirm,
  ButtonWrap,
  CloseButton,
  ModalContent,
  ModalOverlay,
  Span,
  Text,
} from "./ModalApproveAction.styled";

const ModalApproveAction = ({ onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClose = () => {
    onClose();
  };

  const handleConfirm = () => {
    dispatch(logOut());
    navigate("/");
    onClose();
  };

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
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
          <Span>
            <picture>
              <source srcSet={cat2x} media="(min-resolution: 192dpi)" />
              <img src={cat} alt="cat" width="44px" height="44px" />
            </picture>
          </Span>
          <Text>Already leaving?</Text>
          <ButtonWrap>
            <ButtonConfirm onClick={handleConfirm}>Yes</ButtonConfirm>
            <ButtonCancel onClick={handleClose}>Cancel</ButtonCancel>
          </ButtonWrap>
        </div>
      </ModalContent>
    </ModalOverlay>,
    document.getElementById("modal-root")
  );
};

export default ModalApproveAction;
