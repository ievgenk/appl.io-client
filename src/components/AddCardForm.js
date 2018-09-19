import React, { Component } from "react";
import styled from "styled-components";
import { Formik, Field, Form } from "formik";
import moment from "moment";
import * as Yup from "yup";
import { Link, Redirect } from "react-router-dom";
import { addCard } from "../actions/cardActions";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardFormContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(12, 12, 12, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const CardForm = styled(Form)`
  background-color: white;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-width: 35vw;
  font-size: 3rem;
  border: 3px solid black;
  box-shadow: 8px 8px 10px rgba(156, 252, 156, 0.4);

  input {
    border: none;
    border-bottom: 2px solid black;
  }

  @media screen and (max-width: 1300px) {
    width: 50%;
    overflow: scroll;
    font-size: 2.5rem;
  }

  @media screen and (max-width: 768px) {
    height: 100%;
    overflow: auto;
    width: 100%;
    font-size: 2.2rem;
    justify-content: center;
    transition: all 0.3s ease;
    input {
      font-size: 2.2rem;
    }
    input:focus {
      background-color: rgba(156, 252, 156, 0.5);
    }
    @media screen and (max-height: 500px) {
    }
  }
`;

const CardInput = styled(Field)`
  min-width: 50%;
  margin-bottom: 10px;
  font-size: 3rem;
`;

const SubmitButton = styled.button`
  border: 2px solid black;
  background-color: white;
  cursor: pointer;
  margin: 10px;
  padding: 10px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;

  :hover {
    transform: translateY(-7px);
    box-shadow: 15px 15px rgba(156, 252, 156, 0.8);
  }
  @media screen and (max-width: 1300px) {
    padding: 10px 20px 30px 20px;
  }
  @media screen and (max-height: 500px) {
    padding: 10px 20px 30px 20px;
  }
`;

const CardInputLabel = styled.label`
  font-size: 3rem;
  margin-bottom: 5px;

  @media screen and (max-width: 1300px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 2.2rem;
  }
  @media screen and (max-height: 500px) {
    margin-top: 5px;
    font-size: 1.7rem;
  }
`;

const CancelButton = styled.span`
  position: relative;
  top: -2%;
  color: red;
  left: 250px;
  @media screen and (max-width: 768px) {
    position: absolute;
    top: 15px;
    left: 85%;
  }
`;

class AddCardForm extends Component {
  render() {
    const currentDate = moment().format("D MMMM YYYY");
    if (this.props.toDashboard) {
      return <Redirect to="/dashboard" />;
    }

    return (
      <CardFormContainer>
        <Formik
          initialValues={{
            companyName: "",
            postingURL: "",
            contactName: "",
            contactEmail: "",
            contactPhone: "",
            date: currentDate
          }}
          onSubmit={card => {
            this.props.dispatch(addCard(card));
          }}
          validationSchema={Yup.object().shape({
            companyName: Yup.string()
              .trim()
              .min(3),
            postingURL: Yup.string()
              .url()
              .trim(),
            contactName: Yup.string().trim(),
            contactEmail: Yup.string()
              .email()
              .trim(),
            contactPhone: Yup.string().trim(),
            date: Yup.date()
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
            <CardForm onSubmit={handleSubmit}>
              <Link to="/dashboard">
                <CancelButton>
                  <FontAwesomeIcon icon="times" size="lg" />
                </CancelButton>
              </Link>
              {touched.companyName &&
                errors.companyName && <p>{errors.companyName}</p>}
              <CardInputLabel htmlFor="companyName">
                Company Name:
              </CardInputLabel>
              <CardInput type="text" name="companyName" />
              {touched.postingURL &&
                errors.postingURL && <p>{errors.postingURL}</p>}
              <CardInputLabel htmlFor="postingURL">
                Link for Posting:
              </CardInputLabel>
              <CardInput type="text" name="postingURL" />
              {touched.contactName &&
                errors.contactName && <p>{errors.contactName}</p>}
              <CardInputLabel htmlFor="contactName">
                Contact Name:
              </CardInputLabel>
              <CardInput type="text" name="contactName" />
              {touched.contactEmail &&
                errors.contactEmail && <p>{errors.contactEmail}</p>}
              <CardInputLabel htmlFor="contactEmail">
                Contact Email:
              </CardInputLabel>
              <CardInput type="email" name="contactEmail" />
              {touched.contactPhone &&
                errors.contactPhone && <p>{errors.contactPhone}</p>}
              <CardInputLabel htmlFor="contactPhone">
                Contact Phone Number:
              </CardInputLabel>
              <CardInput type="tel" name="contactPhone" />
              <SubmitButton type="submit" disabled={isSubmitting}>
                Submit
              </SubmitButton>
            </CardForm>
          )}
        />
      </CardFormContainer>
    );
  }
}

const mapStateToProps = ({ toDashboard }) => {
  return {
    toDashboard
  };
};

export default connect(mapStateToProps)(AddCardForm);
