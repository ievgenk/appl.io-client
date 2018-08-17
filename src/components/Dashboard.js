import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";
import NavBar from "./NavBar";
import Desk from "./Desk";
import styled from "styled-components";

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  height: 100vh;
  width: 100vw;
  grid-template-rows: repeat(10, 1fr);
`;

export default class Dashboard extends Component {
  render() {
    return this.props.isLoggedIn ? (
      <DashboardGrid>
        <NavBar />
        <Desk />
      </DashboardGrid>
    ) : (
      <Redirect to="/" />
    );
  }
}

Dashboard.defaultProps = {
  isLoggedIn: true
};
