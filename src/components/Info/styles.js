import styled, { css } from "styled-components";
import { Colors } from "../../utils/Colors";

export const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `};
`;

export const StyledTitle = styled.div`
  font-family: "Abel";
  font-size: 20px;
  color: ${Colors.fourth};
  font-weight: 500;
`;

export const StyledValue = styled.div`
  font-family: "Abel";
  font-size: 14px;
`;
