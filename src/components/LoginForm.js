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
  overflow: auto;
  border: 2px black solid;
  padding: 30px;
  font-size: 2.4rem;
  grid-area: frm;
  min-height: 30vh;
  max-height: 60vh;
  background-color: white;
  label {
    padding: 10px;
  }

  input {
    padding: 10px;
    border: 1px solid black;
  }
  p {
    margin: 5px;
    color: red;
  }
  .auth-link {
    color: black;
  }

  button {
    border: 2px solid black;
    background-color: white;
    cursor: pointer;
    margin: 25px 0px 10px 0px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
  }

  button:hover {
    transform: translateY(-7px);
    box-shadow: 15px 15px rgba(156, 252, 156, 0.8);
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
            <p className="auth-link">
              Don't have an account? <br />
              <Link to="/register">Register now!</Link>
            </p>
          </LogForm>
        )}
      />
    );
  }
}

export default connect()(LoginForm);
