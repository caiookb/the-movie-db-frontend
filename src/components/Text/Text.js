import React from "react";
import { StyledTitle, StyledDate, StyledText } from "./styles";

export const Title = ({ title, color, bold }) => (
  <StyledTitle color={color} bold={bold}>
    {title}
  </StyledTitle>
);

export const Date = ({ date, color }) => (
  <StyledDate color={color}>{date}</StyledDate>
);

export const Text = ({ text, color, topic }) => (
  <StyledText color={color} topic={topic}>
    {text}
  </StyledText>
);
