import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import sprite from "../../images/sprite.svg";
import dog from "../../images/dog.png";
import dog2x from "../../images/dog@2x.png";
import {
  ButtonWrap,
  CloseButton,
  ModalContent,
  ModalOverlay,
  Span,
  StyledLinkLogin,
  StyledLinkRegister,
  Text,
  Title,
} from "./ModalAttention.styled";

const ModalAttention = ({ onClose }) => {
  const handleClose = () => {
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
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeydown);
      document.body.style.overflow = "visible";
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
        <Span>
          <picture>
            <source srcSet={dog2x} media="(min-resolution: 192dpi)" />
            <img src={dog} alt="cat" width="44px" height="44px" />
          </picture>
        </Span>
        <Title>Attention</Title>
        <Text>
          We would like to remind you that certain functionality is available
          only to authorized users.If you have an account, please log in with
          your credentials. If you do not already have an account, you must
          register to access these features.
        </Text>
        <ButtonWrap>
          <StyledLinkLogin to="/login">Log In</StyledLinkLogin>
          <StyledLinkRegister to="/register">Registration</StyledLinkRegister>
        </ButtonWrap>
      </ModalContent>
    </ModalOverlay>,
    document.getElementById("modal-root")
  );
};

export default ModalAttention;
