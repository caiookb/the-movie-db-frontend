import styled, { css } from "styled-components";
import { Colors } from "../../utils/Colors";

export const StyledTag = styled.p`
  background-color: ${Colors.white};
  color: ${Colors.fourth};
  margin-right: 15px;
  font-family: "Lato";
  border-radius: 25px;
  font-size: 14px;
  margin: 0;
  max-height: 22px;
  padding: 0px 10px;
  margin-right: 10px;
  margin-bottom: 20px;
  border: 2px solid ${Colors.fourth};
  transition: 0.4s;
  cursor: pointer;

  &:hover {
    filter: brightness(70%) contrast(150%);
  }

  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `};
`;
