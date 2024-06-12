import React from "react";
import sprite from "../../images/sprite.svg";
import { StarsWrap } from "./StarRating.styled";

const StarRating = ({ popularity, maxPopularity = 100 }) => {
  const maxStars = 5;
  const filledStars = Math.ceil((popularity / maxPopularity) * maxStars);

  const stars = Array.from({ length: maxStars }, (_, index) => {
    if (index < filledStars) {
      return (
        <svg key={index} width={16} height={16}>
          <use href={`${sprite}#icon-star`} fill="#FFC531" />
        </svg>
      );
    } else {
      return (
        <svg key={index} width={16} height={16} fill="#F4F4F4">
          <use href={`${sprite}#icon-star`} />
        </svg>
      );
    }
  });

  return (
    <StarsWrap>
      {stars} {popularity}
    </StarsWrap>
  );
};

export default StarRating;
