import React, { Component } from "react";
import styled from "styled-components";
import * as Yup from "yup";
import { Formik, Field, Form } from "formik";

const LogForm = styled(Form)`
  display: flex;
  flex-direction: column;
  border: 2px black solid;
  padding: 50px;
  grid-column: 8 / 12;
  font-size: 2.4rem;
  grid-row: 3 / 7;
  min-height: fit-content;

  label {
    padding: 10px;
  }

  input {
    padding: 10px;
  }

  button {
    margin: 10px;
  }
`;

export default class LoginForm extends Component {
  render() {
    return (
      <Formik
        initialValues={{
          email: "",
          password: ""
        }}
        onSubmit={values => {
          console.log(values);
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
            {touched.email && errors.email && <h3>{errors.email}</h3>}
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" placeholder="Enter Your Email" />
            {touched.password && errors.password && <h3>{errors.password}</h3>}
            <label htmlFor="password">Password</label>
            <Field
              type="password"
              name="password"
              placeholder="Enter Your Password"
            />
            <button type="submit">Login</button>
            <p>Don't have an account? Register now!</p>
          </LogForm>
        )}
      />
    );
  }
}
