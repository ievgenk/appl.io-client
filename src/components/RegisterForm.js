import React, { Component } from "react";
import styled from "styled-components";

const RegForm = styled.form`
  display: flex;
  flex-direction: column;
  border: 2px black solid;
  padding: 20px;
`;

export default class RegisterForm extends Component {
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
      <RegForm>
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
        <button type="submit">Register</button>
        <p>Already have an account? Log in here!</p>
      </RegForm>
    );
  }
}
