import styled, { css } from "styled-components";
import { Colors } from "../../utils/Colors";

export const StyledRoundedData = styled.div`
  color: ${Colors.secondary};
  background-color: ${Colors.primary};
  border: 4px solid ${Colors.primary};
  font-family: "Abel";
  font-weight: 300;
  padding: 20px 16px;
  transition: 1s;

  &:before {
    content: "${(props) => props.data} ";
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    border: 5px solid ${Colors.secondary};
    border-radius: 50%;
  }

  ${(props) =>
    props.rating &&
    css`
      font-size: 22px;
      border-radius: 50%;
      position: absolute;
      bottom: -35px;
      left: 15px;
    `};

  ${(props) =>
    props.size === "lg" &&
    css`
      position: unset;
      font-size: 32px;
      font-weight: 300;
      padding: 16px 12px;
    `};
`;
