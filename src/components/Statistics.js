import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const StatsContainer = styled.div`
  height: 100vh;
  width: 100vw;
`;

const StatsBox = styled.div`
  display: flex;
  width: 50%;
  height: 50%;
  border: 3px solid black;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

class Statistics extends Component {
  render() {
    return (
      <StatsContainer>
        <StatsBox>
          <h1>Hello</h1>
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
