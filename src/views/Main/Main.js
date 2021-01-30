import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Card, Header, Pagination, TextInput } from "../../components";
import { MoviesController } from "../../controller";
import { StyledMain } from "./styles";

const Main = (props) => {
  const { searchMovies, moviesList } = props;

  return (
    <StyledMain>
      <Header title={"Movies"} />
      <TextInput
        placeholder={"Busque um filme por nome, ano ou gênero..."}
        onChange={searchMovies}
      />
      {moviesList?.map((movie) => (
        <Card movie={movie} />
      ))}

      <Pagination list={moviesList} />
    </StyledMain>
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
    searchMovies: (name) => dispatch(MoviesController.searchMovie(name)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
