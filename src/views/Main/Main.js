import React, { useCallback, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Card, Header, Pagination, Spinner, TextInput } from "../../components";
import { MoviesController } from "../../controller";
import { StyledMain } from "./styles";
import { debounce } from "lodash";

const Main = (props) => {
  const {
    searchMovies,
    selectMovie,
    currentPageMovies,
    clearMovieDetail,
    moviesList,
    paginateItems,
    history,
    updateListOnRedux,
  } = props;

  const [isFetching, setFetching] = useState(false);

  const handleChange = useCallback(
    debounce((text) => {
      searchMovies(text).then((res) => {
        setFetching(false);
      });
    }, 1000),
    []
  );

  const handleSelectMovie = (movie) => {
    selectMovie(movie);
    history.push(`/movie/${movie.id}`);
  };

  useEffect(() => {
    updateListOnRedux();
    clearMovieDetail();
  }, []);

  return (
    <StyledMain>
      <Header title={"Movies"} />

      <TextInput
        placeholder={"Busque um filme por nome, ano ou gênero..."}
        onChange={(e) => {
          setFetching(true);
          handleChange(e.target.value);
        }}
      />
      {!isFetching ? (
        currentPageMovies?.map((movie, key) => (
          <Card
            onClick={() => handleSelectMovie(movie)}
            movie={movie}
            key={key}
          />
        ))
      ) : (
        <Spinner />
      )}
      {!isFetching ? (
        <Pagination list={moviesList} paginateItems={paginateItems} />
      ) : null}
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
    updateListOnRedux: () => dispatch(MoviesController.updateListOnRedux()),
    clearMovieDetail: () => dispatch(MoviesController.clearMovieDetail()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
