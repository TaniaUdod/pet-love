import React from "react";
import PetsItem from "../PetsItem/PetsItem";
import { PetsListContainer } from "./PetsList.styled";

const PetsList = ({ pets, onDelete }) => {
  return (
    <PetsListContainer>
      {pets.map((pet) => (
        <PetsItem key={pet._id} pet={pet} onDelete={onDelete} />
      ))}
    </PetsListContainer>
  );
};

export default PetsList;
