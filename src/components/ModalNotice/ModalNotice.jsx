import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addNotice,
  deleteNotice,
  getOneNotice,
} from "../../store/notices/operations";
import { selectNotices } from "../../store/notices/selectors";
import { selectFavoritesNotices } from "../../store/auth/selectors";
import sprite from "../../images/sprite.svg";
import StarRating from "../StarRating/StarRating";
import { formatBirthday } from "../../helpers/formatBirthday";
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
  noticeId,
  onClose,
  setIsFavorite,
  setShowFirstNotice,
}) => {
  const dispatch = useDispatch();

  const allNotices = useSelector(selectNotices);
  const notice = allNotices.results.find((item) => item._id === noticeId);

  const favoritesNotices = useSelector(selectFavoritesNotices) || [];

  useEffect(() => {
    dispatch(getOneNotice(noticeId));
  }, [dispatch, noticeId]);

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
      dispatch(deleteNotice(noticeId));
      setIsFavorite(false);
    } else {
      if (favoritesNotices.length === 0) {
        setShowFirstNotice(true);
      }
      dispatch(addNotice(noticeId));
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

        <Img src={notice.imgURL} alt={notice.title} />
        <Category>{notice.category}</Category>

        <Title>{notice.title}</Title>
        <StarRating popularity={notice.popularity} />

        <DetailsWrap>
          <DetailsTitle>
            Name <span>{notice.name}</span>
          </DetailsTitle>
          <DetailsTitle>
            Birthday <span>{formatBirthday(notice.birthday)}</span>
          </DetailsTitle>
          <DetailsTitle>
            Sex <span>{notice.sex}</span>
          </DetailsTitle>
          <DetailsTitle>
            Species <span>{notice.species}</span>
          </DetailsTitle>
        </DetailsWrap>

        <Comment>{notice.comment}</Comment>

        <ButtonWrap>
          <ButtonFavorite type="button" onClick={handleFavoriteClick}>
            {isFavorite ? "Remove from" : "Add to"}
            <svg width="18" height="18" stroke="#FFFFFF" fill="none">
              <use href={`${sprite}#icon-heart`} />
            </svg>
          </ButtonFavorite>
          <ButtonContact type="button">
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
