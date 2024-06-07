import React from "react";
import {
  Details,
  FriendsItemWrap,
  Img,
  Text,
  Title,
} from "./FriendsItem.styled";

const FriendsItem = ({
  address,
  addressUrl,
  imageUrl,
  email,
  phone,
  title,
  workDays,
}) => {
  return (
    <FriendsItemWrap>
      <Img src={imageUrl} alt={title} />
      <div style={{ overflow: "hidden" }}>
        <Title>{title}</Title>
        <Text>
          <span>Email: </span>
          {email ? (
            <a
              href={`mailto:${email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {email}
            </a>
          ) : (
            "website only"
          )}
        </Text>
        <Text>
          <span>Address: </span>
          {address ? (
            <a href={addressUrl} target="_blank" rel="noopener noreferrer">
              {address}
            </a>
          ) : (
            "website only"
          )}
        </Text>
        <Text>
          <span>Phone: </span>
          {phone ? (
            <a href={`tel:${phone}`} target="_blank" rel="noopener noreferrer">
              {phone}
            </a>
          ) : (
            "email only"
          )}
        </Text>
      </div>
      <Details>
        {workDays && workDays.length > 0 ? (
          <div>
            {workDays[0].isOpen ? (
              <p>
                {workDays[0].from} - {workDays[0].to}
              </p>
            ) : (
              <p>Closed</p>
            )}
          </div>
        ) : (
          <p>Day and night</p>
        )}
      </Details>
    </FriendsItemWrap>
  );
};

export default FriendsItem;
