import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../store/news/operations";
import { selectNews } from "../../store/news/selectors";
import Title from "../../components/Title/Title";
import SearchField from "../../components/SearchField/SearchField";
import NewsList from "../../components/NewsList/NewsList";
import Pagination from "../../components/Pagination/Pagination";
import { NewsContainer, TitleWrap } from "./News.styled";

const News = () => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const news = useSelector(selectNews);

  useEffect(() => {
    dispatch(getNews({ keyword, page: currentPage, limit: 6 })).then(
      (response) => {
        if (response.payload) {
          setTotalPages(response.payload.totalPages);
        }
      }
    );
  }, [dispatch, keyword, currentPage]);

  const handleSearch = (keyword) => {
    setKeyword(keyword);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <NewsContainer>
      <TitleWrap>
        <Title text="News" />
        <SearchField onSearch={handleSearch} />
      </TitleWrap>
      <NewsList news={news.results} />
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </NewsContainer>
  );
};

export default News;
