import React, { Component } from "react";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import LandingPage from "./LandingPage";
import Dashboard from "./Dashboard";

//Secure Route for Dashboard

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("isLoggedIn") === "true" ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/register" component={LandingPage} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Switch>
    );
  }
}
