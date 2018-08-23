import React, { Component } from "react";
import styled from "styled-components";
import { Formik, Field, Form } from "formik";
import moment from "moment";
import * as Yup from "yup";
import { Link, Redirect } from "react-router-dom";
import { addCard } from "../actions/cardActions";
import { connect } from "react-redux";
import uuid from "uuid/v4";

const CardFormContainer = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  background-color: rgba(12, 12, 12, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardForm = styled(Form)`
  background-color: white;
  min-height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  min-width: 35vw;
  font-size: 3rem;
`;

const CardInput = styled(Field)`
  min-width: 50%;
  margin-bottom: 10px;
  font-size: 3rem;
`;

const SubmitButton = styled.button`
  min-height: fit-content;
  max-width: 25%;
  font-size: 2rem;
`;

const CardInputLabel = styled.label`
  font-size: 3rem;
  margin-bottom: 5px;
`;

const CancelButton = styled.div`
  width: 40px;
  height: 40px;
  border: 2px solid black;
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bolder;
  position: relative;
  top: -25px;
  left: 200px;
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
            date: currentDate,
            id: uuid()
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
                <CancelButton>X</CancelButton>
              </Link>
              {touched.companyName &&
                errors.companyName && <p>{errors.companyName}</p>}
              <CardInputLabel htmlFor="companyName">
                Company Name
              </CardInputLabel>
              <CardInput type="text" name="companyName" />
              {touched.postingURL &&
                errors.postingURL && <p>{errors.postingURL}</p>}
              <CardInputLabel htmlFor="postingURL">
                Link for Posting
              </CardInputLabel>
              <CardInput type="text" name="postingURL" />
              {touched.contactName &&
                errors.contactName && <p>{errors.contactName}</p>}
              <CardInputLabel htmlFor="contactName">
                Contact Name
              </CardInputLabel>
              <CardInput type="text" name="contactName" />
              {touched.contactEmail &&
                errors.contactEmail && <p>{errors.contactEmail}</p>}
              <CardInputLabel htmlFor="contactEmail">
                Contact Email
              </CardInputLabel>
              <CardInput type="email" name="contactEmail" />
              {touched.contactPhone &&
                errors.contactPhone && <p>{errors.contactPhone}</p>}
              <CardInputLabel htmlFor="contactPhone">
                Contact Phone Number
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
