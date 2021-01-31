import React from "react";
import { StyledRoundedData } from "./styles";

const RoundedData = ({ data, size, onClick, rating }) => {
  return (
    <StyledRoundedData
      rating={rating}
      size={size}
      onClick={onClick}
      data-testid="rounded-data"
    >
      {data}
    </StyledRoundedData>
  );
};

export default RoundedData;

RoundedData.defaultProps = {
  onClick: () => null,
};
