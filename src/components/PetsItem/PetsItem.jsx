import React from "react";
import { formatBirthday } from "../../helpers/formatBirthday";
import sprite from "../../images/sprite.svg";
import {
  Box,
  Button,
  Details,
  DetailsItem,
  Img,
  PetsItemContainer,
  Span,
  Text,
  Title,
} from "./PetsItem.styled";

const PetsItem = ({ pet, onDelete }) => {
  const { _id, imgURL, title, name, birthday, sex, species } = pet;

  return (
    <PetsItemContainer>
      <Box>
        <Img src={imgURL} alt={`${name}`} />
        <Details>
          <Title>{title}</Title>
          <DetailsItem>
            <Text>
              Name <Span>{name}</Span>
            </Text>
            <Text>
              Birthday <Span>{formatBirthday(birthday)}</Span>
            </Text>
            <Text>
              Sex <Span>{sex}</Span>
            </Text>
            <Text>
              Species <Span>{species}</Span>
            </Text>
          </DetailsItem>
        </Details>
      </Box>

      <Button type="button" onClick={() => onDelete(_id)}>
        <svg width="16" height="16" fill="none" stroke="currentColor">
          <use href={`${sprite}#icon-trash`} />
        </svg>
      </Button>
    </PetsItemContainer>
  );
};

export default PetsItem;
