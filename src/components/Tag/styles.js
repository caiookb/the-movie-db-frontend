import styled, { css } from "styled-components";
import { Colors } from "../../utils/Colors";

export const StyledTag = styled.p`
  background-color: ${Colors.white};
  color: ${Colors.primary};
  margin-right: 15px;
  font-family: "Lato";
  border-radius: 25px;
  margin: 0;
  max-height: 22px;
  padding: 0px 10px;
  margin-right: 10px;
  margin-bottom: 20px;
  border: 2px solid ${Colors.primary};

  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `};
`;
