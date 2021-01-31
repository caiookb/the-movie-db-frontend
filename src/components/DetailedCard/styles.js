import styled, { css } from "styled-components";
import { Colors } from "../../utils/Colors";

export const StyledDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledDetailedCard = styled.div`
  display: flex;
  margin-top: 40px;
  align-self: center;
  flex-direction: column;
  background-color: ${Colors.background};
  height: fit-content;
  width: 50%;
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

export const StyledApproval = styled.div`
  width: 110px;
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
  width: 280px;

  @media (max-width: 768px) {
    width: 250px;
  }

  @media (max-width: 500px) {
    display: none;
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
  width: 95%;
  padding-bottom: 6px;
  margin-bottom: 15px;
  border-bottom: 2px solid ${Colors.secondary};
`;

export const StyledRow = styled.div`
  display: flex;
  flex-wrap: wrap;

  flex-direction: row;
  width: 95%;
  justify-content: space-between;

  @media (max-width: 500px) {
    margin: auto;
    width: 85%;
    justify-content: center;
  }
`;

export const StyledTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 500px) {
    justify-content: center;
  }
`;

export const StyledRoundedData = styled.div`
  position: relative;
  border: 4px solid ${Colors.primary};
  border-radius: 50%;

  @media (max-width: 500px) {
  }
`;
