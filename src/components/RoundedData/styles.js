import styled, { css } from "styled-components";
import { Colors } from "../../utils/Colors";

export const StyledRoundedData = styled.div`
  color: ${Colors.secondary};
  background-color: ${Colors.primary};
  border: 4px solid ${Colors.primary};
  font-family: "Abel";
  font-weight: 300;
  padding: 20px 16px;

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
      color: ${props.color};
      font-size: 22px;
      border-radius: 50%;
      position: absolute;
      bottom: -35px;
      left: 15px;
    `};
`;
