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
  padding: 20px;

  @media screen and (max-width: 690px) {
    grid-row: 2 / 8;
    padding: 10px;
  }
  @media screen and (max-width: 380px) {
    grid-column: 2 / 12;
  }
  @media screen and (max-height: 800px) {
    grid-column: 2 / 12;
  }
  @media screen and (max-height: 600px) {
    padding: 20px;
    grid-row: 4 / 7;
  }
`;
const AboutHeader = styled.h1`
  font-size: 4rem;
`;

const AboutBody = styled.div`
  font-size: 2rem;
  margin: 10px;
  max-width: 80%;
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
