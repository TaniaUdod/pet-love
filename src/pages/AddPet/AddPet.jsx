import React from "react";
import AddPetForm from "../../components/AddPetForm/AddPetForm";
import PetBlock from "../../components/PetBlock/PetBlock";
import addPetMob from "../../images/add-pet-mob.png";
import addPetMob2x from "../../images/add-pet-mob@2x.png";
import addPetTab from "../../images/add-pet-tab.png";
import addPetTab2x from "../../images/add-pet-tab@2x.png";
import addPetDesk from "../../images/add-pet-desk.png";
import addPetDesk2x from "../../images/add-pet-desk@2x.png";
import { AddPetContainer } from "./AddPet.styled";

const AddPet = () => {
  const sources = [
    {
      srcSet: `${addPetMob}, ${addPetMob2x} 2x`,
      media: "(max-width: 767px)",
      width: 335,
    },
    {
      srcSet: `${addPetTab}, ${addPetTab2x} 2x`,
      media: "(min-width: 768px) and (max-width: 1279px)",
      width: 704,
    },
    {
      srcSet: `${addPetDesk}, ${addPetDesk2x} 2x`,
      media: "(min-width: 1280px)",
      width: 592,
    },
  ];

  return (
    <AddPetContainer>
      <PetBlock
        sources={sources}
        defaultSrc={addPetDesk}
        alt="dog with glasses"
      />
      <AddPetForm />
    </AddPetContainer>
  );
};

export default AddPet;
