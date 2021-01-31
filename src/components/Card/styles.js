import styled, { css } from "styled-components";
import { Colors } from "../../utils/Colors";

export const StyledCard = styled.div`
  display: flex;
  margin-top: 40px;
  align-self: center;
  flex-direction: row;
  background-color: ${Colors.background};
  height: fit-content;
  min-heigth: 330px;
  width: 50%;
  position: unset;
  cursor: pointer;

  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `};

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
    max-height: unset;
  }

  @media (max-width: 500px) {
    min-height: 550px;
    height: fit-content;
    position: relative;
    z-index: 1;
    width: 90%;

    &:before {
      content: "aaaaaaaaaaaaa";
      position: absolute;
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
      z-index: 0;
      background-image: url("${(props) => props.url}");
      background-size: cover;
      filter: blur(2px) brightness(20%);
      border: 1px solid red;
    }
  }
`;

export const StyledImage = styled.img`
  width: 250px;

  @media (max-width: 768px) {
    width: 250px;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

export const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 500px) {
    z-index: 1;
  }
`;

export const StyledInfoTitle = styled.div`
  background-color: ${Colors.primary};
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: flex-end;
`;

export const StyledApproval = styled.div`
  width: 110px;
`;

export const StyledTitle = styled.div`
  width: 85%;
  padding-top: 20px;
  padding-bottom: 2px;

  @media (max-width: 500px) {
    color: white;
  }
`;

export const StyledDate = styled.div`
  position: absolute;
  bottom: -45px;
  left: 110px;
`;

export const StyledOverview = styled.div`
  margin-top: 25px;
  padding: 0px 35px;
`;

export const StyledTags = styled.div`
  display: flex;
  flex-wrap: wrap;

  padding: 0px 35px;

  @media (max-width: 500px) {
    width: 100%;
  }
`;
