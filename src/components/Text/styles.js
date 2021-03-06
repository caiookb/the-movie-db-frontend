import styled, { css } from "styled-components";
import { Colors } from "../../utils/Colors";

export const StyledTitle = styled.h1`
  color: #00e8e4;
  font-family: "Abel";
  font-weight: 300;
  margin: 0;

  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `};

  ${(props) =>
    props.bold &&
    css`
      font-weight: bold;
    `};
`;

export const StyledDate = styled.p`
  font-family: "Lato";
  font-weight: 300;
  color: #8f8f8f;
`;

export const StyledText = styled.p`
  font-family: "Lato";
  font-size: 16px;
  font-weight: 500;
  margin: 0;

  color: ${Colors.text};

  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `}

  ${(props) =>
    props.topic &&
    css`
      font-size: 20px;
      font-family: "Abel";
      color: ${props.color};
    `}
`;
