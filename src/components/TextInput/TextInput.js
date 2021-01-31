import React from "react";
import { StyledInput } from "./styles";

const TextInput = ({ onChange, placeholder }) => (
  <StyledInput onChange={onChange} placeholder={placeholder}></StyledInput>
);

export default TextInput;
