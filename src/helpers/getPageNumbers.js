export const getPageNumbers = (currentPage, totalPages, isMobile) => {
  const pages = [];
  const maxPagesToShow = isMobile ? 3 : 4;

  if (totalPages <= maxPagesToShow) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    if (currentPage <= maxPagesToShow - 1) {
      for (let i = 1; i < maxPagesToShow; i++) {
        pages.push(i);
      }
      pages.push("...");
    } else if (currentPage >= totalPages - (maxPagesToShow - 2)) {
      pages.push("...");
      for (let i = totalPages - (maxPagesToShow - 2); i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push("...");
      for (
        let i = currentPage - 1;
        i <= currentPage + (maxPagesToShow - 3);
        i++
      ) {
        pages.push(i);
      }
      pages.push("...");
    }
  }
  return pages;
};
