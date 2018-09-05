import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./LandingPage";
import Dashboard from "./Dashboard";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/register" component={LandingPage} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    );
  }
}

export default App;
