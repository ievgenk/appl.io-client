import React, { Component } from "react";
import NavBar from "./NavBar";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

const LandingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 10px;
  height: 100vh;
  width: 100vw;
  grid-template-rows: repeat(10, minmax(100px, max-content));
`;

const LandingMessage = styled.h1`
  grid-column: 2 / 6;
  font-size: 5.5rem;
  grid-row: 3 / 5;
`;

export default class LandingPage extends Component {
  render() {
    return !this.props.isLoggedIn ? (
      <Router>
        <LandingGrid>
          <NavBar />
          <Route exact path="/" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          <LandingMessage>
            🔍 Track Your
            <br /> 💼 Job
            <br /> 📝 Applications
            <br /> 👌 With Ease!
          </LandingMessage>
        </LandingGrid>
      </Router>
    ) : (
      <Redirect to="/dashboard" />
    );
  }
}

LandingPage.defaultProps = {
  isLoggedIn: false
};
