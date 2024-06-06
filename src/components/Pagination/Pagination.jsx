import React from "react";
import sprite from "../../images/sprite.svg";
import { getPageNumbers } from "../../helpers/getPageNumbers";
import { Ellipsis, PageButton, PaginationContainer } from "./Pagination.styled";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const isMobile = window.innerWidth <= 767;
  const pages = getPageNumbers(currentPage, totalPages, isMobile);

  return (
    <PaginationContainer>
      <PageButton
        onClick={() => handlePageChange(1)}
        disabled={currentPage === 1}
      >
        <svg width="20" height="20">
          <use href={`${sprite}#icon-arrow-left`} />
        </svg>
        <svg width="20" height="20" style={{ marginLeft: "-14px" }}>
          <use href={`${sprite}#icon-arrow-left`} />
        </svg>
      </PageButton>
      <PageButton
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <svg width="20" height="20">
          <use href={`${sprite}#icon-arrow-left`} />
        </svg>
      </PageButton>
      {pages.map((page, index) =>
        typeof page === "number" ? (
          <PageButton
            key={index}
            onClick={() => handlePageChange(page)}
            active={(currentPage === page).toString()}
          >
            {page}
          </PageButton>
        ) : (
          <Ellipsis key={index}>{page}</Ellipsis>
        )
      )}
      <PageButton
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <svg width="20" height="20">
          <use href={`${sprite}#icon-arrow-right`} />
        </svg>
      </PageButton>
      <PageButton
        onClick={() => handlePageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        <svg width="20" height="20">
          <use href={`${sprite}#icon-arrow-right`} />
        </svg>
        <svg width="20" height="20" style={{ marginLeft: "-14px" }}>
          <use href={`${sprite}#icon-arrow-right`} />
        </svg>
      </PageButton>
    </PaginationContainer>
  );
};

export default Pagination;
