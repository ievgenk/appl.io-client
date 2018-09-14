import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  border: 3px black solid;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45vh;
  background-color: white;
`;
const AboutHeader = styled.h1``;

export default () => {
  return (
    <AboutContainer>
      <AboutHeader>About Appl.io</AboutHeader>
    </AboutContainer>
  );
};
