import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class Dashboard extends Component {
  render() {
    return this.props.isLoggedIn ? (
      <div>Future Home of The Dashboard</div>
    ) : (
      <Redirect to="/" />
    );
  }
}

Dashboard.defaultProps = {
  isLoggedIn: false
};
