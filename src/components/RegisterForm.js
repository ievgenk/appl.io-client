import React, { Component } from "react";
import styled from "styled-components";
import * as Yup from "yup";
import { Formik, Field, Form } from "formik";
import { registerNewUser } from "../actions/authActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const RegForm = styled(Form)`
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
`;

class RegisterForm extends Component {
  render() {
    return (
      <Formik
        initialValues={{
          email: "",
          password: ""
        }}
        onSubmit={newUser => {
          this.props.dispatch(registerNewUser(newUser));
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
          isSubmitting,
          resetForm
        }) => (
          <RegForm>
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
            <button type="submit">
              <span>Register</span>
            </button>
            <p>
              Already have an account?
              <Link to="/">Login here!</Link>
            </p>
          </RegForm>
        )}
      />
    );
  }
}

export default connect()(RegisterForm);
