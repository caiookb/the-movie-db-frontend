import styled, { css } from "styled-components";
import { Colors } from "../../utils/Colors";

export const StyledPagination = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

export const StyledPage = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid white;
  font-weight: bold;
  color: #8f8f8f;
  margin: 5px;
  padding: 5px 10px;
  font-family: "Lato";
  color: ${Colors.third};
  cursor: pointer;
  position: relative;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.current &&
    css`
      color: ${Colors.secondary};
      background-color: ${Colors.primary};
      border: 4px solid ${Colors.primary};
      font-family: "Abel";
      font-weight: 300;
      padding: 12px 22px;
      border-radius: 50%;
      font-size: 32px;

      &:before {
        content: "${(props) => props.data} ";
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        border: 4px solid ${Colors.secondary};
        border-radius: 50%;
      }
    `}
`;

export const StyledText = styled.p`
  font-family: "Lato";
  font-size: 16px;
  font-weight: 600;
  color: ${Colors.text};
`;
