import React from "react";
import { StyledVideo } from "./styles";

const Video = ({ url }) => {
  console.log("???????", url);
  return <iframe src={url} />;
};

export default Video;
