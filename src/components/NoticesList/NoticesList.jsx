import React from "react";
import NoticesItem from "../NoticesItem/NoticesItem";
import { NoticesListWrap } from "./NoticesList.styled";

const NoticesList = ({ notices }) => {
  return (
    <NoticesListWrap>
      {notices.map((notice) => (
        <NoticesItem key={notice._id} {...notice} />
      ))}
    </NoticesListWrap>
  );
};

export default NoticesList;
