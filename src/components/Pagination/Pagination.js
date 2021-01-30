import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { MoviesController } from "../../controller";
import { StyledPagination, StyledPage } from "./styles";

const Pagination = (props) => {
  const { list, paginateMovies } = props;

  const [pages, setPages] = useState([]);
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    setItems(
      [...Array(Math.ceil(list?.length / 5))].map((_) => list.splice(0, 5))
    );

    setPages(Array.from({ length: items.length }, (v, k) => k + 1));
  }, [list]);

  useEffect(
    () =>
      items.map((page, idx) =>
        idx === currentPage ? paginateMovies(page) : null
      ),
    [currentPage]
  );

  return (
    <StyledPagination>
      {pages.map((page) => {
        return (
          <StyledPage
            current={page - 1 === currentPage}
            onClick={() => setCurrentPage(page - 1)}
          >
            {page}
          </StyledPage>
        );
      })}
    </StyledPagination>
  );
};

const mapStateToProps = (state) => {
  const {
    movies: { moviesList },
  } = state;
  return { moviesList };
};

const mapDispatchToProps = (dispatch) => {
  return {
    paginateMovies: (list) => dispatch(MoviesController.paginateMovies(list)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
