import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../../store/auth/operations";
import { selectFavoritesNotices } from "../../store/auth/selectors";
import { deleteNotice } from "../../store/notices/operations";
import FavoritesItem from "../FavoritesItem/FavoritesItem";
import { FavoritesItemList, Text } from "./FavoritePets.styled";

const FavoritePets = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavoritesNotices);
  const prevFavoritesLength = useRef();

  useEffect(() => {
    if (prevFavoritesLength.current !== favorites?.length) {
      dispatch(refreshUser());
    }
    prevFavoritesLength.current = favorites?.length;
  }, [dispatch, favorites]);

  const handleRemoveFavorites = async (id) => {
    await dispatch(deleteNotice(id));
    dispatch(refreshUser());
  };

  return (
    <div>
      {favorites?.length > 0 ? (
        <FavoritesItemList>
          {favorites.map((notice) => (
            <FavoritesItem
              key={notice._id}
              notice={notice}
              onRemoveFavorites={handleRemoveFavorites}
              favorites={favorites}
            />
          ))}
        </FavoritesItemList>
      ) : (
        <Text>
          Oops, <span>looks like there aren't any furries</span> on our adorable
          page yet. Do not worry! View your pets on the "find your favorite pet"
          page and add them to your favorites.
        </Text>
      )}
    </div>
  );
};

export default FavoritePets;
