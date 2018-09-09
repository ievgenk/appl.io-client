import React, { Component } from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { redirectToDash } from "../actions/dashboardActions";
import {
  resetOpenCard,
  updateCardField,
  deleteCard
} from "../actions/cardActions";

const OpenCardContainer = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  background-color: rgba(12, 12, 12, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
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

const DeleteBtn = styled.button``;

const FormInput = styled.input``;

const CardFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  min-height: 70%;
  background-color: white;
`;

class OpenCardView extends Component {
  state = {};

  handleDashRedirect = () => {
    this.props.dispatch(redirectToDash());
    this.props.dispatch(resetOpenCard());
  };

  handleDelete = () => {
    this.props.dispatch(deleteCard(this.props.openCard.id));
    this.handleDashRedirect();
  };

  handleChange = event => {
    const cardFieldValue = event.target.value;
    const cardFieldName = event.target.name;
    const cardId = this.props.openCard._id;

    this.props.dispatch(updateCardField(cardFieldName, cardFieldValue, cardId));
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
        <CardFormContainer>
          <OpenCardForm>
            <CancelButton onClick={this.handleDashRedirect}>X</CancelButton>
            <FormInput
              name={"companyName"}
              contentEditable={true}
              defaultValue={companyName}
              onChange={this.handleChange}
            />
            <FormInput
              name={"postingURL"}
              contentEditable={true}
              defaultValue={postingURL}
              onChange={this.handleChange}
            />
            <FormInput
              name={"contactName"}
              contentEditable={true}
              defaultValue={contactName}
              onChange={this.handleChange}
            />
            <FormInput
              name={"contactEmail"}
              contentEditable={true}
              defaultValue={contactEmail}
              onChange={this.handleChange}
            />
            <FormInput
              name={"contactPhone"}
              contentEditable={true}
              defaultValue={contactPhone}
              onChange={this.handleChange}
            />
            <FormInput
              name={"date"}
              contentEditable={true}
              defaultValue={date}
            />
          </OpenCardForm>
        </CardFormContainer>
      </OpenCardContainer>
    );
  }
}

const mapStateToProps = ({ toDashboard, openCard }) => ({
  openCard,
  toDashboard
});

export default connect(mapStateToProps)(OpenCardView);
