import React, { Component } from "react";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import LandingPage from "./LandingPage";
import Dashboard from "./Dashboard";
import { connect } from "react-redux";

//Secure Route for Dashboard

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      return rest.auth.login.loggedIn === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location }
          }}
        />
      );
    }}
  />
);

const mapStateToProps = state => state;

const ConnectedPrivateRoute = connect(mapStateToProps)(PrivateRoute);

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/register" component={LandingPage} />
        <ConnectedPrivateRoute path="/dashboard" component={Dashboard} />
      </Switch>
    );
  }
}
