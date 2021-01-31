import React from "react";
import { StyledVideo, Frame } from "./styles";

const Video = ({ url }) => {
  return (
    <StyledVideo>
      <Frame type="text/html" src={url} frameBorder="0" />
    </StyledVideo>
  );
};

export default Video;
