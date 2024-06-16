import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addNotice,
  deleteNotice,
  getOneNotice,
} from "../../store/notices/operations";
import { selectFavoritesNotices } from "../../store/auth/selectors";
import { formatBirthday } from "../../helpers/formatBirthday";
import StarRating from "../StarRating/StarRating";
import sprite from "../../images/sprite.svg";
import {
  ButtonContact,
  ButtonFavorite,
  ButtonWrap,
  Category,
  CloseButton,
  Comment,
  DetailsTitle,
  DetailsWrap,
  Img,
  ModalContent,
  ModalOverlay,
  Title,
} from "./ModalNotice.styled";

const ModalNotice = ({
  isFavorite,
  notice,
  onClose,
  setIsFavorite,
  setShowFirstNotice,
}) => {
  const dispatch = useDispatch();

  const {
    _id,
    imgURL,
    name,
    title,
    birthday,
    sex,
    species,
    popularity,
    comment,
    category,
  } = notice;

  const favoritesNotices = useSelector(selectFavoritesNotices) || [];

  useEffect(() => {
    dispatch(getOneNotice(_id));
  }, [dispatch, _id]);

  const location = useLocation();
  const isprofile = location.pathname === "/profile";

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

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(deleteNotice(_id));
      setIsFavorite(false);
    } else {
      if (favoritesNotices.length === 0) {
        setShowFirstNotice(true);
      }
      dispatch(addNotice(_id));
      setIsFavorite(true);
    }
  };

  return createPortal(
    <ModalOverlay onClick={handleBackdropClick}>
      <ModalContent>
        <CloseButton onClick={handleClose}>
          <svg>
            <use href={`${sprite}#icon-close`} />
          </svg>
        </CloseButton>

        <Img src={imgURL} alt={title} />
        <Category>{category}</Category>

        <Title>{title}</Title>
        <StarRating popularity={popularity} />

        <DetailsWrap>
          <DetailsTitle>
            Name <span>{name}</span>
          </DetailsTitle>
          <DetailsTitle>
            Birthday <span>{formatBirthday(birthday)}</span>
          </DetailsTitle>
          <DetailsTitle>
            Sex <span>{sex}</span>
          </DetailsTitle>
          <DetailsTitle>
            Species <span>{species}</span>
          </DetailsTitle>
        </DetailsWrap>

        <Comment>{comment}</Comment>

        <ButtonWrap>
          {!isprofile && (
            <ButtonFavorite type="button" onClick={handleFavoriteClick}>
              {isFavorite ? "Remove from" : "Add to"}
              <svg width="18" height="18" stroke="#FFFFFF" fill="none">
                <use href={`${sprite}#icon-heart`} />
              </svg>
            </ButtonFavorite>
          )}
          <ButtonContact type="button" isprofile={isprofile.toString()}>
            <Link to={"mailto:test@gmail.com"} target="_blank">
              Contact
            </Link>
          </ButtonContact>
        </ButtonWrap>
      </ModalContent>
    </ModalOverlay>,
    document.getElementById("modal-root")
  );
};

export default ModalNotice;
