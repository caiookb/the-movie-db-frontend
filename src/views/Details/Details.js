import React from "react";
import { connect } from "react-redux";
import { DetailedCard, Header } from "../../components";
import { StyledDetails } from "./Styles";

const Details = (props) => {
  const { selectedMovie } = props;

  console.log("SEELC", selectedMovie);

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

export default connect(mapStateToProps, null)(Details);
