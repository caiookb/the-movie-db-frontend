import React from "react";
import { StyledRoundedData } from "./styles";

const RoundedData = ({ data, onClick, rating }) => {
  return (
    <StyledRoundedData rating={rating} onClick={onClick}>
      {data}
    </StyledRoundedData>
  );
};

export default RoundedData;

RoundedData.defaultProps = {
  onClick: () => null,
};
