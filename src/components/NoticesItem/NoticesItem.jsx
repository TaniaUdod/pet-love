import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addNotice,
  deleteNotice,
  getOneNotice,
} from "../../store/notices/operations";
import {
  selectFavoritesNotices,
  selectIsLoggedIn,
} from "../../store/auth/selectors";
import { formatBirthday } from "../../helpers/formatBirthday";
import ModalAttention from "../ModalAttention/ModalAttention";
import ModalNotice from "../ModalNotice/ModalNotice";
import ModalFirstItemNotice from "../ModalFirstItemNotice/ModalFirstItemNotice";
import sprite from "../../images/sprite.svg";
import {
  ButtonFavorite,
  ButtonMore,
  ButtonWrap,
  Comment,
  DetailsTitle,
  DetailsWrap,
  Img,
  NoticesItemContainer,
  PopularityWrap,
  Title,
  TitleWrap,
} from "./NoticesItem.styled";

const NoticesItem = (notice) => {
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
  } = notice.notice;

  const dispatch = useDispatch();
  const [showAttentionModal, setShowAttentionModal] = useState(false);
  const [showNoticeModal, setShowNoticeModal] = useState(false);
  const [showFirstNotice, setShowFirstNotice] = useState(false);
  const [isViewedPage, setIsViewedPage] = useState(false);

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const favoritesNotices = useSelector(selectFavoritesNotices);

  const [isFavorite, setIsFavorite] = useState(
    favoritesNotices.find((favorite) => (favorite._id === _id ? true : false))
  );

  const location = useLocation();
  const isprofile = location.pathname === "/profile";

  useEffect(() => {
    if (isprofile) {
      setIsViewedPage(true);
    } else {
      setIsViewedPage(false);
    }
  }, [isprofile]);

  useEffect(() => {
    if (showNoticeModal && !isViewedPage) {
      dispatch(getOneNotice(_id));
    }
  }, [dispatch, _id, isViewedPage, showNoticeModal]);

  const handleLearnMore = () => {
    if (!isLoggedIn) {
      setShowAttentionModal(true);
    } else {
      setShowNoticeModal(true);
    }
  };

  const handleFavoriteClick = () => {
    if (!isLoggedIn) {
      setShowAttentionModal(true);
    } else {
      if (isFavorite) {
        dispatch(deleteNotice(_id));
        setIsFavorite(false);
      } else {
        if (favoritesNotices?.length === 0) {
          setShowFirstNotice(true);
        }
        dispatch(addNotice(_id));
        setIsFavorite(true);
      }
    }
  };

  const closeModal = () => {
    setShowAttentionModal(false);
    setShowNoticeModal(false);
  };

  const closeModalFirstItemNotice = () => {
    setShowFirstNotice(false);
  };

  return (
    <NoticesItemContainer isprofile={isprofile.toString()}>
      <div>
        <Img src={imgURL} alt={title} isprofile={isprofile.toString()} />
        <TitleWrap>
          <Title>{title}</Title>
          <PopularityWrap>
            <svg width="16" height="16" fill="#FFC531">
              <use href={`${sprite}#icon-star`} />
            </svg>
            {popularity}
          </PopularityWrap>
        </TitleWrap>

        <DetailsWrap isprofile={isprofile.toString()}>
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
          <DetailsTitle>
            Category <span>{category}</span>
          </DetailsTitle>
        </DetailsWrap>

        <Comment isprofile={isprofile.toString()}>{comment}</Comment>
      </div>

      <ButtonWrap>
        <ButtonMore
          type="button"
          onClick={handleLearnMore}
          isprofile={isprofile.toString()}
        >
          Learn more
        </ButtonMore>

        {!isprofile && (
          <ButtonFavorite type="button" onClick={handleFavoriteClick}>
            {!isLoggedIn ? (
              <svg width="18" height="18" stroke="#f6b83d" fill="none">
                <use href={`${sprite}#icon-heart`} />
              </svg>
            ) : (
              <svg
                width="18"
                height="18"
                fill={isFavorite ? "#f6b83d" : "none"}
                stroke="#f6b83d"
              >
                <use href={`${sprite}#icon-heart`} />
              </svg>
            )}
          </ButtonFavorite>
        )}
      </ButtonWrap>

      {showAttentionModal && <ModalAttention onClose={closeModal} />}
      {showNoticeModal && (
        <ModalNotice
          isFavorite={isFavorite}
          setIsFavorite={setIsFavorite}
          notice={notice.notice}
          onClose={closeModal}
          setShowFirstNotice={setShowFirstNotice}
        />
      )}

      {showFirstNotice && (
        <ModalFirstItemNotice
          onClose={closeModalFirstItemNotice}
          setShowFirstNotice={setShowFirstNotice}
          showFirstNotice={showFirstNotice}
        />
      )}
    </NoticesItemContainer>
  );
};

export default NoticesItem;
