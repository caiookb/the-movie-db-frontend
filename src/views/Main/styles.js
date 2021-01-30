import styled, { css } from "styled-components";
import { Colors } from "../../utils/Colors";

export const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Colors.white};

  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `}
`;
