import React, { Component } from "react";
import styled from "styled-components";
import * as Yup from "yup";
import { Formik, Field, Form } from "formik";
import { loginUser } from "../actions/authActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const LogForm = styled(Form)`
  display: flex;
  flex-direction: column;
  border: 2px black solid;
  padding: 50px;
  grid-column: 8 / 12;
  font-size: 2.4rem;
  grid-row: 3 / 7;
  min-height: fit-content;
  background-color: white;
  label {
    padding: 10px;
  }

  input {
    padding: 10px;
  }

  button {
    margin: 10px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  @media screen and (max-width: 600px) {
    padding: 50px;
    grid-column: 1 / -1;
    font-size: 2rem;
    grid-row: span 4;
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

class LoginForm extends Component {
  render() {
    return (
      <Formik
        initialValues={{
          email: "",
          password: ""
        }}
        onSubmit={user => {
          this.props.dispatch(
            loginUser(user.email.trim(), user.password.trim())
          );
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .trim()
            .email()
            .required(),
          password: Yup.string()
            .min(6)
            .required()
        })}
        render={({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => (
          <LogForm>
            {touched.email && errors.email && <p>{errors.email}</p>}
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" placeholder="Enter Your Email" />
            {touched.password && errors.password && <p>{errors.password}</p>}
            <label htmlFor="password">Password</label>
            <Field
              type="password"
              name="password"
              placeholder="Enter Your Password"
            />
            <button type="submit">
              <span>Login</span>
            </button>
            <p>
              Don't have an account? <Link to="/register">Register now!</Link>
            </p>
          </LogForm>
        )}
      />
    );
  }
}

export default connect()(LoginForm);
