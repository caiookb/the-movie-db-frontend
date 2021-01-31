import React from "react";
import { DetailedCard, Header } from "../../components";
import { StyledDetails } from "./Styles";

const Details = (props) => {
  const selectedMovies = JSON.parse(localStorage.getItem("selectedMovie"));

  return (
    <StyledDetails>
      <Header title={"Movies"} />
      <DetailedCard card={selectedMovies} />
    </StyledDetails>
  );
};

export default Details;
