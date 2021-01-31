import styled, { css } from "styled-components";
import { Colors } from "../../utils/Colors";

export const StyledInput = styled.input`
  margin: auto;
  background-color: ${Colors.background};
  color: ${Colors.primary};
  margin-top: 40px;
  padding: 10px 25px;
  width: 57%;
  border-radius: 25px;
  border: none;
  font-family: "Abel";
  font-size: 18px;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${Colors.fourth};
  }

  @media (max-width: 500px) {
    width: 77%;
  }
  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `};
`;
