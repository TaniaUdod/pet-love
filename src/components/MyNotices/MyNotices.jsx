import React from "react";
import { useState } from "react";
import FavoritePets from "../FavoritePets/FavoritePets";
import Viewed from "../Viewed/Viewed";
import {
  ButonViewed,
  ButtonContainer,
  ButtonFavoritePets,
  MyNoticesContainer,
} from "./MyNotices.styled";

const MyNotices = () => {
  const [activeTab, setActiveTab] = useState("favoritePets");

  return (
    <MyNoticesContainer>
      <ButtonContainer>
        <ButtonFavoritePets
          type="button"
          onClick={() => setActiveTab("favoritePets")}
          isactive={(activeTab === "favoritePets" ? "active" : "").toString()}
        >
          My favorite pets
        </ButtonFavoritePets>
        <ButonViewed
          type="button"
          onClick={() => setActiveTab("viewed")}
          isactive={(activeTab === "viewed" ? "active" : "").toString()}
        >
          Viewed
        </ButonViewed>
      </ButtonContainer>

      {activeTab === "favoritePets" && <FavoritePets />}
      {activeTab === "viewed" && <Viewed />}
    </MyNoticesContainer>
  );
};

export default MyNotices;
