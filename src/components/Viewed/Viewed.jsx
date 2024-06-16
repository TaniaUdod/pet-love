import React from "react";
import { useSelector } from "react-redux";
import { selectViewedNotices } from "../../store/auth/selectors";
import NoticesItem from "../NoticesItem/NoticesItem";
import { ViewedList } from "./Viewed.styled";

const Viewed = () => {
  const viewedNotices = useSelector(selectViewedNotices);

  return (
    <ViewedList>
      {viewedNotices.map((notice, index) => (
        <NoticesItem key={`notice._id${index}`} notice={notice} />
      ))}
    </ViewedList>
  );
};

export default Viewed;
