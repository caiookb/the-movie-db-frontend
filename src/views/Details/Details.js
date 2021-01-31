import React, { useEffect } from "react";
import { connect } from "react-redux";
import { DetailedCard, Header } from "../../components";
import { MoviesController } from "../../controller";
import { StyledDetails } from "./Styles";

const Details = (props) => {
  const { selectedMovie, fetchById } = props;

  const splitUrl = window.location.href.split("/");
  const movieId = { id: splitUrl[splitUrl.length - 1] };

  useEffect(() => {
    fetchById(movieId);
  }, []);

  return (
    <StyledDetails>
      <Header title={"Movies"} />
      <DetailedCard card={selectedMovie} />
    </StyledDetails>
  );
};

const mapStateToProps = (state) => {
  const {
    movies: { selectedMovie },
  } = state;
  return { selectedMovie };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchById: (id) => dispatch(MoviesController.selectedMovieCard(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
