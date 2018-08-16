import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";
import NavBar from "./NavBar";
import { Grid, Cell } from "styled-css-grid";
import Desk from "./Desk";

export default class Dashboard extends Component {
  render() {
    return this.props.isLoggedIn ? (
      <Fragment>
        <Grid columns={12} height={"100vh"} rows={"repeat(10, 1fr)"} gap={0}>
          <Cell width={12}>
            <NavBar />
          </Cell>
          <Cell width={12} height={9}>
            <Desk />
          </Cell>
        </Grid>
      </Fragment>
    ) : (
      <Redirect to="/" />
    );
  }
}

Dashboard.defaultProps = {
  isLoggedIn: true
};
