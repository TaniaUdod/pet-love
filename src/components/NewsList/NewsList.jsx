import React from "react";
import NewsItem from "../NewsItem/NewsItem";
import { NewsListWrap } from "./NewsList.styled";

const NewsList = ({ news }) => {
  return (
    <NewsListWrap>
      {news.map((item) => (
        <NewsItem key={item._id} news={item} />
      ))}
    </NewsListWrap>
  );
};

export default NewsList;
