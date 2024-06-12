import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import cat from "../../images/cat.png";
import cat2x from "../../images/cat@2x.png";
import sprite from "../../images/sprite.svg";
import {
  CloseButton,
  ModalContent,
  ModalOverlay,
  Span,
  StyledLinkButton,
  Text,
  Title,
} from "./ModalFirstItemNotice.styled";

const ModalFirstItemNotice = ({ onClose }) => {
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
            <source srcSet={cat2x} media="(min-resolution: 192dpi)" />
            <img src={cat} alt="cat" width="44px" height="44px" />
          </picture>
        </Span>
        <Title>Congrats</Title>
        <Text>
          The first fluff in the favorites! May your friendship be the happiest
          and filled with fun.
        </Text>

        <StyledLinkButton to={"/profile"}>Go to profile</StyledLinkButton>
      </ModalContent>
    </ModalOverlay>,
    document.getElementById("modal-root")
  );
};

export default ModalFirstItemNotice;
