import React from "react";
import { StyledTitle, StyledDate, StyledText } from "./styles";

export const Title = ({ title, color }) => (
  <StyledTitle color={color}>{title}</StyledTitle>
);

export const Date = ({ date, color }) => (
  <StyledDate color={color}>{date}</StyledDate>
);

export const Text = ({ text, color }) => (
  <StyledText color={color}>{text}</StyledText>
);
