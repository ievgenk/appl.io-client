import React, { Component } from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { redirectToDash } from "../actions/dashboardActions";
import { resetOpenCard } from "../actions/cardActions";

const OpenCardContainer = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  background-color: rgba(12, 12, 12, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OpenCardForm = styled.form`
  background-color: white;
  min-height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 40px;
  min-width: 35vw;
  font-size: 3rem;
`;

const CancelButton = styled.div`
  width: 40px;
  height: 40px;
  border: 2px solid black;
  color: red;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-weight: bolder;
  position: relative;
  top: -25px;
  left: 200px;
`;

const CardHeadline = styled.h3`
  margin: 0;
`;

const FormInput = styled.input``;

class OpenCardView extends Component {
  handleDashRedirect = () => {
    this.props.dispatch(redirectToDash());
    this.props.dispatch(resetOpenCard());
  };

  render() {
    const {
      companyName,
      contactEmail,
      contactName,
      contactPhone,
      date,
      postingURL
    } = this.props.openCard;
    if (this.props.toDashboard) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <OpenCardContainer>
        <OpenCardForm>
          <CancelButton onClick={this.handleDashRedirect}>X</CancelButton>
          <FormInput readOnly value={companyName} />
          <FormInput contentEditable={true} value={postingURL} />
          <FormInput readOnly value={contactName} />
          <FormInput readOnly value={contactEmail} />
          <FormInput readOnly value={contactPhone} />
          <FormInput readOnly value={date} />
        </OpenCardForm>
      </OpenCardContainer>
    );
  }
}

const mapStateToProps = ({ toDashboard, openCard }) => ({
  openCard,
  toDashboard
});

export default connect(mapStateToProps)(OpenCardView);
