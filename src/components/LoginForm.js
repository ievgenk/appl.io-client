import React, { Component } from "react";
import styled from "styled-components";

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  border: 2px black solid;
  padding: 20px;
`;

export default class AuthForm extends Component {
  render() {
    return (
      <LoginForm>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Your Email"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Your Password"
        />
        <button type="submit">Login</button>
        <p>Don't have an account? Register now!</p>
      </LoginForm>
    );
  }
}
