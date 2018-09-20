import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: ftr;
  text-align: center;
  background-color: white;
  border-top: 3px solid black;
  font-size: 1.5rem;
`;

export default () => {
  return (
    <Footer>
      <h3>
        Made with{" "}
        <span role="img" aria-label="coffe-mug emoji">
          ☕
        </span>{" "}
        and{" "}
        <span role="img" aria-label="heart with stars emoji">
          💖
        </span>{" "}
        by Evgeny Kasian. 2018.
      </h3>
    </Footer>
  );
};
