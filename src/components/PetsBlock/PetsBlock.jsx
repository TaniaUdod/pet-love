import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserPets } from "../../store/auth/selectors";
import { refreshUser, userRemovePet } from "../../store/auth/operations";
import sprite from "../../images/sprite.svg";
import PetsList from "../PetsList/PetsList";
import { StyledLink, Title, TitleWrap } from "./PetsBlock.styled";

const PetsBlock = () => {
  const dispatch = useDispatch();
  const pets = useSelector(selectUserPets);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const handleDeletePet = (petId) => {
    dispatch(userRemovePet(petId));
    dispatch(refreshUser());
  };

  return (
    <div>
      <TitleWrap>
        <Title>My pets</Title>
        <StyledLink to="/add-pet">
          <p>Add pet</p>
          <svg width="18" height="18" fill="#FFFFFF" stroke="#FFFFFF">
            <use href={`${sprite}#icon-plus`} />
          </svg>
        </StyledLink>
      </TitleWrap>

      <PetsList pets={pets} onDelete={handleDeletePet} />
    </div>
  );
};

export default PetsBlock;
