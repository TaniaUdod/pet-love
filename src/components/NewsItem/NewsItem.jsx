import React from "react";
import { formatDate } from "../../helpers/formatDate";
import {
  Date,
  Detail,
  Img,
  Link,
  NewsItemWrap,
  Text,
  Title,
} from "./NewsItem.styled";

const NewsItem = ({ news }) => {
  return (
    <NewsItemWrap>
      <Img src={news.imgUrl} alt={news.title} />
      <Title>{news.title}</Title>
      <Text>{news.text}</Text>
      <Detail>
        <Date>{formatDate(news.date)}</Date>
        <Link href={news.url} target="_blank" rel="noopener noreferrer">
          Read more
        </Link>
      </Detail>
    </NewsItemWrap>
  );
};

export default NewsItem;
