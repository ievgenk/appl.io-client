import React from "react";
import styled from "styled-components";

const MainNav = styled.nav`
  border-bottom: 3px solid black;
  grid-column: 1/-1;
  font-size: ${props => (props.landing ? "2.5rem" : "2rem")};
  padding-left: 20px;
  display: flex;
  align-items: center;

  h1 {
    margin: 0;
  }
`;

export default () => {
  return (
    <MainNav>
      <h1>Appl.io</h1>
    </MainNav>
  );
};
