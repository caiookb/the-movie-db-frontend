import React, { useEffect, useState } from "react";
import { StyledPagination, StyledPage } from "./styles";

const Pagination = (props) => {
  const { list, paginateItems } = props;

  const [pages, setPages] = useState([]);
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const data = [...list];

  const splicePages = [...Array(Math.ceil(data?.length / 5 || 1))].map((_) => {
    return data?.splice(0, 5);
  });
  const pagesLength = Array.from(
    { length: splicePages?.length || 1 },
    (v, k) => k + 1
  );

  useEffect(() => {
    setItems(splicePages);
    setPages(pagesLength);
  }, [list]);

  useEffect(() => {
    items.forEach((page, idx) => {
      return idx === currentPage ? paginateItems(page) : null;
    });
  }, [currentPage]);

  useEffect(() => paginateItems(splicePages[currentPage]), [items]);

  return (
    <StyledPagination>
      {pages.map((page) => (
        <StyledPage
          current={page - 1 === currentPage}
          onClick={() => setCurrentPage(page - 1)}
        >
          {page}
        </StyledPage>
      ))}
    </StyledPagination>
  );
};

export default Pagination;
