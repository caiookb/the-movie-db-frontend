import React, { useCallback, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Card, Header, Pagination, TextInput } from "../../components";
import { MoviesController } from "../../controller";
import { StyledMain } from "./styles";
import { debounce } from "lodash";

const Main = (props) => {
  const {
    searchMovies,
    selectMovie,
    currentPageMovies,
    moviesList,
    paginateItems,
    history,
  } = props;

  const handleChange = useCallback(
    debounce((text) => {
      searchMovies(text);
    }, 1000),
    []
  );

  const handleSelectMovie = (movie) => {
    selectMovie(movie);
    history.push(`/movie/${movie.id}`);
  };

  return (
    <StyledMain>
      <Header title={"Movies"} />
      <TextInput
        placeholder={"Busque um filme por nome, ano ou gênero..."}
        onChange={(e) => handleChange(e.target.value)}
      />
      {currentPageMovies?.map((movie, key) => (
        <Card
          onClick={() => handleSelectMovie(movie)}
          movie={movie}
          key={key}
        />
      ))}
      <Pagination list={moviesList} paginateItems={paginateItems} />
    </StyledMain>
  );
};

const mapStateToProps = (state) => {
  const {
    movies: { moviesList, currentPage },
  } = state;
  return { moviesList, currentPageMovies: currentPage };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchMovies: (name) => dispatch(MoviesController.searchMovie(name)),
    selectMovie: (movie) => dispatch(MoviesController.selectedMovieCard(movie)),
    paginateItems: (list) => dispatch(MoviesController.paginateMovies(list)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
