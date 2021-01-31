import React from "react";
import { StyledInfo, StyledTitle, StyledValue } from "./styles";

const Info = ({ title, value }) => (
  <StyledInfo>
    <StyledTitle>{title}</StyledTitle>
    <StyledValue>{value}</StyledValue>
  </StyledInfo>
);

export default Info;
