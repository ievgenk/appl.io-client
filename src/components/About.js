import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  border: 2px black solid;
  grid-column: 3 / 11;
  max-height: 60vh;
  overflow: auto;
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const AboutHeader = styled.h1`
  font-size: 4rem;
`;

const AboutBody = styled.div`
  font-size: 2rem;
`;

export default () => {
  return (
    <AboutContainer>
      <AboutHeader>About</AboutHeader>
      <AboutBody>
        <p>
          Appl.io is a job application tracker with a convinient kanban inspired
          layout.
        </p>
        <p>It is simple as:</p>
        <ol>
          <li>Create an account.</li>
          <li>
            Add a card with some essential details about the position you have
            applied for.
          </li>
          <li>
            As the status of that application changes, drag the card into a
            different column.
          </li>
        </ol>
        <p>And a final step, find a job of your dreams!</p>
        <p>Hey, thanks so much for stopping by and enjoy using Appl.io 😃</p>

        <h2>P.S</h2>
        <p>Demo Credentials are:</p>
        <p>
          Email: user@test.com
          <br />
          Password: testuser
        </p>
      </AboutBody>
    </AboutContainer>
  );
};
