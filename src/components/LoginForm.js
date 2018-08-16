import React, { Component } from "react";
import styled from "styled-components";

const LogForm = styled.form`
  display: flex;
  flex-direction: column;
  border: 2px black solid;
  padding: 20px;
`;

export default class LoginForm extends Component {
  state = {
    email: "",
    password: ""
  };

  handleEmailChange = event => {
    let email = event.target.value;
    this.setState(() => ({
      email
    }));
  };

  handlePasswordChange = event => {
    let password = event.target.value;
    this.setState(() => ({
      password
    }));
  };

  render() {
    return (
      <LogForm>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Your Email"
          value={this.state.email}
          onChange={this.handleEmailChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Your Password"
          value={this.state.password}
          onChange={this.handlePasswordChange}
        />
        <button type="submit">Login</button>
        <p>Don't have an account? Register now!</p>
      </LogForm>
    );
  }
}
