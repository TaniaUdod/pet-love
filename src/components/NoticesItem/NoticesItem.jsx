import React, { useEffect, useState } from "react";
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
import sprite from "../../images/sprite.svg";
import ModalAttention from "../ModalAttention/ModalAttention";
import ModalNotice from "../ModalNotice/ModalNotice";
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
import ModalFirstItemNotice from "../ModalFirstItemNotice/ModalFirstItemNotice";

const NoticesItem = ({
  _id,
  imgURL,
  title,
  popularity,
  name,
  birthday,
  sex,
  species,
  category,
  comment,
}) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [showAttentionModal, setShowAttentionModal] = useState(false);
  const [showNoticeModal, setShowNoticeModal] = useState(false);
  const [showFirstNotice, setShowFirstNotice] = useState(false);

  const favoritesNotices = useSelector(selectFavoritesNotices);
  const [isFavorite, setIsFavorite] = useState(
    favoritesNotices?.find((favorite) => (favorite._id === _id ? true : false))
  );

  useEffect(() => {
    setIsFavorite(favoritesNotices?.some((favorite) => favorite._id === _id));
  }, [favoritesNotices, _id]);

  const handleLearnMore = () => {
    if (!isLoggedIn) {
      setShowAttentionModal(true);
    } else {
      dispatch(getOneNotice(_id));
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
    <NoticesItemContainer>
      <Img src={imgURL} alt={title} />
      <TitleWrap>
        <Title>{title}</Title>
        <PopularityWrap>
          <svg width="16" height="16" fill="#FFC531">
            <use href={`${sprite}#icon-star`} />
          </svg>
          {popularity}
        </PopularityWrap>
      </TitleWrap>

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
        <DetailsTitle>
          Category <span>{category}</span>
        </DetailsTitle>
      </DetailsWrap>

      <Comment>{comment}</Comment>

      <ButtonWrap>
        <ButtonMore type="button" onClick={handleLearnMore}>
          Learn more
        </ButtonMore>

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
      </ButtonWrap>

      {showAttentionModal && <ModalAttention onClose={closeModal} />}
      {showNoticeModal && (
        <ModalNotice
          isFavorite={isFavorite}
          setIsFavorite={setIsFavorite}
          noticeId={_id}
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
