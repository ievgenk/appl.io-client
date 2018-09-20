import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import LandingPage from "./LandingPage";
import Dashboard from "./Dashboard";
import PageNotFound from "./PageNotFound";
import { connect } from "react-redux";
import { clear } from "redux-localstorage-simple";

//Getting Font Awesome Icons for the Project

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

library.add(faTimes);

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

const ConnectedPrivateRoute = connect(state => state)(PrivateRoute);

class App extends Component {
  clearLocalStorageRedux = () => {
    if (this.props.router.location.pathname === "/") {
      clear();
    }
  };

  componentDidMount = () => {
    this.clearLocalStorageRedux();
  };

  componentDidUpdate = () => {
    this.clearLocalStorageRedux();
  };

  render() {
    return (
      <React.Fragment>
        <Switch>
          <ConnectedPrivateRoute path="/dashboard" component={Dashboard} />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/register" component={LandingPage} />
          <Route exact path="/about" component={LandingPage} />
          <Route component={PageNotFound} />
        </Switch>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ router }) => ({
  router
});

export default connect(mapStateToProps)(App);
