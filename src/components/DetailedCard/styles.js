import styled, { keyframes } from "styled-components";
import { Colors } from "../../utils/Colors";

const fade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
     margin-top: 50px;
  }
`;

const expand = keyframes`
   0% {
    opacity: 0;
    width: 0%;
  }
  100% {
    opacity: 1;
    width: 95% 
  }
`;

export const StyledDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation-name: ${fade};
  animation-duration: 1.5s;
  animation-direction: normal;
  animation-fill-mode: forwards;
  transition: 1s;
`;

export const StyledDetailedCard = styled.div`
  display: flex;
  align-self: center;
  flex-direction: column;
  background-color: ${Colors.background};
  height: fit-content;
  width: 75%;
  position: unset;

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
  }
`;

export const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 25px 8px 25px 30px;

  @media (max-width: 500px) {
    z-index: 1;
  }
`;

export const StyledInfoTitle = styled.div`
  background-color: ${Colors.background};
  position: relative;
  display: flex;
  flex-direction: row;
  align-content: center;
`;

export const StyledTitle = styled.div`
  width: 85%;
  padding-left: 30px;
  padding-top: 8px;
  margin: 0;

  @media (max-width: 500px) {
    color: white;
  }
`;

export const StyledImage = styled.img`
  width: 300px;

  @media (max-width: 768px) {
    width: 330px;
  }

  @media (max-width: 500px) {
    margin: auto;
  }
`;

export const StyledDate = styled.div`
  padding-right: 25px;
`;

export const StyledOverview = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${Colors.lightBackground};

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const StyledTopic = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 40px;

  @media (max-width: 500px) {
    width: 90%;
  }
`;

export const StyledTopicTitle = styled.div`
  padding-bottom: 6px;
  margin-bottom: 15px;
  animation-name: ${expand};
  animation-duration: 2s;
  animation-direction: normal;
  animation-fill-mode: forwards;
  border-bottom: 2px solid ${Colors.secondary};
`;

export const StyledRow = styled.div`
  display: flex;
  flex-wrap: wrap;

  flex-direction: row;
  width: 95%;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 500px) {
    width: 85%;
  }
`;

export const StyledTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 500px) {
    justify-content: center;
  }
`;

const float = keyframes`
  0% {
    filter: brightness(50%);
    opacity: 0;

  }
  100% {
    filter: brightness(100%);

    transform: rotateY(360deg);
  }
`;

export const StyledRoundedData = styled.div`
  position: relative;
  border: 4px solid ${Colors.primary};
  border-radius: 50%;
  animation-name: ${float};
  animation-duration: 1.5s;
  animation-direction: alternate;
  animation-iteration-count: 1;
  transition: 1s;
  cursor: pointer;

  @media (max-width: 500px) {
    margin: auto;
  }

  &:hover {
    transform: rotateY(360deg);
  }
`;
