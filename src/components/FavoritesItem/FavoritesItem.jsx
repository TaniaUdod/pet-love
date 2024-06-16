import React, { useEffect, useState } from "react";
import { formatBirthday } from "../../helpers/formatBirthday";
import ModalNotice from "../ModalNotice/ModalNotice";
import sprite from "../../images/sprite.svg";
import {
  ButtonFavorite,
  ButtonMore,
  ButtonWrap,
  Comment,
  DetailsTitle,
  DetailsWrap,
  FavoritesItemContainer,
  Img,
  PopularityWrap,
  Title,
  TitleWrap,
} from "./FavoritesItem.styled";

const FavoritesItem = ({ notice, onRemoveFavorites, favorites }) => {
  const [showDetails, setShowDetails] = useState(false);

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

  const [isFavorite, setIsFavorite] = useState(
    favorites?.find((favorite) => (favorite._id === _id ? true : false))
  );

  useEffect(() => {
    setIsFavorite(favorites?.find((favorite) => favorite._id === _id));
  }, [favorites, _id]);

  const handleRemoveFavorites = () => onRemoveFavorites(_id);

  const handleLearnMore = () => setShowDetails(true);

  const closeModal = () => {
    setShowDetails(false);
  };

  return (
    <FavoritesItemContainer>
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

        <ButtonFavorite type="button" onClick={handleRemoveFavorites}>
          <svg width="18" height="18" stroke="#f6b83d" fill="none">
            <use href={`${sprite}#icon-trash`} />
          </svg>
        </ButtonFavorite>
      </ButtonWrap>

      {showDetails && (
        <ModalNotice
          isFavorite={isFavorite}
          setIsFavorite={setIsFavorite}
          notice={notice}
          onClose={closeModal}
        />
      )}
    </FavoritesItemContainer>
  );
};

export default FavoritesItem;
