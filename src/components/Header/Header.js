import React from "react";
import { Title } from "..";
import { Colors } from "../../utils/Colors";
import { StyledHeader } from "./styles";

const Header = ({ title }) => (
  <StyledHeader>
    <Title title={title} color={Colors.secondary} />
  </StyledHeader>
);

export default Header;
