import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import LandingPage from "./LandingPage";
import Dashboard from "./Dashboard";
import { connect } from "react-redux";

//Secure Route for Dashboard

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      return rest.auth.login.token !== null ? (
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
      <React.Fragment>
        <ConnectedPrivateRoute path="/dashboard" component={Dashboard} />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/register" component={LandingPage} />
      </React.Fragment>
    );
  }
}
