import React, { Component } from "react";
import NavBar from "./NavBar";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { Grid, Cell } from "styled-css-grid";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

export default class LandingPage extends Component {
  render() {
    return !this.props.isLoggedIn ? (
      <Router>
        <Grid columns={12}>
          <Cell width={12}>
            <NavBar />
          </Cell>
          <Cell width={4} left={8} top={8}>
            <Route exact path="/" component={LoginForm} />
            <Route path="/register" component={RegisterForm} />
          </Cell>
          <Cell width={5} left={2} top={8}>
            <h1>Track Your Job Applications With Ease!</h1>
          </Cell>
        </Grid>
      </Router>
    ) : (
      <Redirect to="/dashboard" />
    );
  }
}

LandingPage.defaultProps = {
  isLoggedIn: false
};
