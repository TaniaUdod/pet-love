import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectNotices, selectTotalPages } from "../../store/notices/selectors";
import Title from "../../components/Title/Title";
import NoticesFilters from "../../components/NoticesFilters/NoticesFilters";
import NoticesList from "../../components/NoticesList/NoticesList";
import Pagination from "../../components/Pagination/Pagination";
import { NoticesContainer } from "./Notices.styled";

const Notices = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = useSelector(selectTotalPages);
  const notices = useSelector(selectNotices);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <NoticesContainer>
      <Title text="Find your favorite pet" />
      <NoticesFilters
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <NoticesList notices={notices.results} />
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </NoticesContainer>
  );
};

export default Notices;
