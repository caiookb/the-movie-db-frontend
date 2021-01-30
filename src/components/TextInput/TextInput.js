import React from "react";
import { StyledInput } from "./styles";

const TextInput = ({ onChange, placeholder }) => (
  <StyledInput
    onChange={(e) => onChange(e.target.value)}
    placeholder={placeholder}
  ></StyledInput>
);

export default TextInput;
