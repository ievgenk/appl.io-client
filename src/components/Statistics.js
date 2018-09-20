import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const StatsContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: "Neucha", cursive;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23abb7d9' fill-opacity='0.53'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`;

const StatsBox = styled.div`
  display: grid;
  width: 60%;
  height: 80%;
  border: 3px solid black;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  grid-template-rows: auto 1fr;
  box-shadow: 15px 15px 15px 5px rgba(0, 0, 0, 0.1);
  font-size: 4rem;
  background-color: #ffffff;
  overflow: scroll;
  h1 {
    font-size: 6rem;
    margin: 5px 0 10px 0;
    grid-column: 1 / -1;
    text-align: center;
  }
  h2 {
    font-size: 4.5rem;
    margin: 5px 0 10px 0;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  @media screen and (max-width: 1100px) {
    width: 80%;
    h1 {
      font-size: 4rem;
    }
    h2 {
      font-size: 3.5rem;
    }
  }

  @media screen and (max-width: 750px) {
    width: 80%;
    h1 {
      font-size: 4rem;
    }
    h2 {
      font-size: 3.5rem;
    }
    overflow: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  @media screen and (max-width: 400px) {
    width: 80%;
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 2.5rem;
    }
  }
`;

const GeneralBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: start;

  @media screen and (max-width: 1100px) {
    padding: 10px;
    font-size: 3rem;
  }

  @media screen and (max-width: 750px) {
    padding: 10px;
    font-size: 3rem;
    align-self: center;
  }
  @media screen and (max-height: 375px) {
    padding: 10px;
    align-self: center;
    font-size: 2rem;
    margin: 50px;
  }

  @media screen and (max-width: 400px) {
    padding: 10px;
    align-self: center;
    font-size: 2rem;
  }
`;

const AppliedBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: start;

  @media screen and (max-width: 1100px) {
    padding: 10px;
    font-size: 3rem;
  }

  @media screen and (max-width: 750px) {
    padding: 10px;
    align-self: center;
    font-size: 3rem;
  }

  @media screen and (max-height: 375px) {
    padding: 10px;
    align-self: center;
    font-size: 2rem;
    margin: 50px;
  }

  @media screen and (max-width: 400px) {
    padding: 10px;
    align-self: center;
    font-size: 2rem;
  }
`;

class Statistics extends Component {
  render() {
    const { cards, boards } = this.props;
    const boardIds = Object.keys(boards);
    return (
      <StatsContainer>
        <StatsBox>
          <h1>Stats</h1>
          <GeneralBox>
            <ul>
              <h2>General Numbers</h2>
              <li>Jobs Applied To: {Object.keys(cards).length}</li>
              <li>
                Success rate:{" "}
                {(
                  (boards[boardIds[4]].cardIds.length /
                    Object.keys(cards).length) *
                  100
                ).toFixed(2)}
                %
              </li>
            </ul>
          </GeneralBox>
          <AppliedBox>
            <ul>
              <h2>Number of Applications</h2>
              {boardIds.map(boardId => (
                <li key={boardId}>
                  {`${boards[boardId].title}:
                ${boards[boardId].cardIds.length}`}
                </li>
              ))}
            </ul>
          </AppliedBox>
        </StatsBox>
      </StatsContainer>
    );
  }
}

const mapStateToProps = ({ boards, cards }) => ({
  boards,
  cards
});

export default connect(mapStateToProps)(Statistics);
