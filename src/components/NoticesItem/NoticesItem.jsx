import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../store/auth/selectors";
import {
  addNotice,
  deleteNotice,
  getOneNotice,
} from "../../store/notices/operations";
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
import { formatBirthday } from "../../helpers/formatBirthday";

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

  const handleLearnMore = () => {
    if (!isLoggedIn) {
      // Show ModalAttention
    } else {
      dispatch(getOneNotice(_id)); // Fetch notice details and show ModalNotice
    }
  };

  const handleFavoriteClick = () => {
    if (!isLoggedIn) {
      // Show ModalAttention
    } else {
      if (isLoggedIn) {
        dispatch(deleteNotice(_id)); // Remove from favorites
      } else {
        dispatch(addNotice(_id)); // Add to favorites
      }
    }
  };

  return (
    <NoticesItemContainer>
      <Img src={imgURL} alt={title} />
      <TitleWrap>
        <Title>{title}</Title>
        <PopularityWrap>
          <svg width="16" height="16" fill="none" stroke="#262626">
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
        <ButtonMore onClick={handleLearnMore}>Learn more</ButtonMore>

        <ButtonFavorite onClick={handleFavoriteClick}>
          <svg width="18" height="18" fill="none" stroke="#262626">
            <use href={`${sprite}#icon-heart`} />
          </svg>
          {/* {isLoggedIn ? ("Add to favorites" || "Remove from favorites") : "Show ModalAttention"} */}
        </ButtonFavorite>
      </ButtonWrap>
    </NoticesItemContainer>
  );
};

export default NoticesItem;
