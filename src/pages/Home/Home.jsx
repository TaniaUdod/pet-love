import React from "react";
import homeMob from "../../images/home-mob.png";
import homeMob2x from "../../images/home-mob@2x.png";
import homeTab from "../../images/home-tab.png";
import homeTab2x from "../../images/home-tab@2x.png";
import homeDesk from "../../images/home-desk.png";
import homeDesk2x from "../../images/home-desk@2x.png";
import { Text, Title, TitleWrap } from "./Home.styled";

const Home = () => {
  return (
    <>
      <TitleWrap>
        <Title>Take good care of your small pets</Title>
        <Text>
          Choosing a pet for your home is a choice that is meant to enrich your
          life with immeasurable joy and tenderness.
        </Text>
      </TitleWrap>

      <picture>
        <source
          srcSet={`${homeMob}, ${homeMob2x} 2x`}
          media="(max-width: 767px)"
          width={375}
        />
        <source
          srcSet={`${homeTab}, ${homeTab2x} 2x`}
          media="(min-width: 768px) and (max-width: 1279px)"
          width={768}
        />
        <source
          srcSet={`${homeDesk}, ${homeDesk2x} 2x`}
          media="(min-width: 1280px)"
          width={1280}
        />
        <img
          src={homeDesk}
          alt="girl with dog"
          style={{ borderRadius: "30px" }}
        />
      </picture>
    </>
  );
};

export default Home;
