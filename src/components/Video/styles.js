import styled from "styled-components";

export const StyledVideo = styled.div`
  margin-top: 50px;
  width: 75%;
  height: 600px;

  @media (max-width: 768px) {
    width: 90%;
    height: 300px;
    max-height: unset;
  }

  @media (max-width: 500px) {
    height: fit-content;
    position: relative;
    z-index: 1;
    height: 300px;
    width: 90%;
  }
`;

export const Frame = styled.iframe`
  width: 100%;
  height: 100%;
`;
