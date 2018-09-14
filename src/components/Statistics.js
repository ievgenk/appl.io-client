import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const StatsContainer = styled.div`
  height: 100vh;
  width: 100vw;
`;

class Statistics extends Component {
  render() {
    return (
      <StatsContainer>
        <h1>Hello</h1>
      </StatsContainer>
    );
  }
}

const mapStateToProps = ({ boards, cards }) => ({
  boards,
  cards
});

export default connect(mapStateToProps)(Statistics);
