import React from "react";
import { StyledTag } from "./styles";

const Tag = ({ tag, key }) => (
  <StyledTag key={key} tag={tag} data-testid="tag">
    {tag}
  </StyledTag>
);

export default Tag;
