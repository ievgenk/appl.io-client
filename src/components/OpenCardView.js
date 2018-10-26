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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OpenCardContainer = styled.div`
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

const OpenCardForm = styled.form`
  background-color: white;
  height: 80%;
  width: 80%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 35vw;
  font-size: 3rem;
  border: 3px solid black;
  box-shadow: 10px 10px 8px rgba(171, 183, 217, 0.6);
  overflow: scroll;
  h1 {
    font-size: 3.5rem;
    margin: 0;
  }
  @media screen and (max-height: 450px) {
    height: 100%;
    width: 100%;
    padding: 10px;
    font-size: 2rem;
    h1 {
      font-size: 2.5rem;
    }
  }
  @media screen and (max-width: 500px) {
    height: 100%;
    width: 100%;
    padding: 10px;
    font-size: 2rem;
    h1 {
      font-size: 2.5rem;
    }
  }
`;

const MainFlexContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 70%;
  width: 90%;

  @media screen and (max-height: 450px) {
    flex-direction: column;
    flex-flow: row wrap;
    overflow: scroll;
    width: 100%;
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
    flex-flow: row wrap;
    overflow: scroll;
    width: 100%;
  }
`;

const FlexBoxColumn = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  align-self: flex-start;
  @media screen and (max-width: 500px) {
    align-self: center;
    align-items: center;
    justify-content: center;
  }
`;

const CancelButton = styled.span`
  position: relative;
  top: -7%;
  color: red;
  left: 45%;
  cursor: pointer;
`;
const CardInputLabel = styled.label`
  font-size: 3rem;
  margin-bottom: 5px;
  margin: 10px 0;
  font-weight: bold;
  @media screen and (max-height: 450px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 2rem;
  }
`;

const DeleteBtn = styled.button`
  border: 2px solid black;
  background-color: white;
  cursor: pointer;
  margin: 10px;
  padding: 10px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;

  :hover {
    transform: translateY(-7px);
    box-shadow: 15px 15px rgba(252, 43, 51, 0.8);
  }
`;

const FormInput = styled.input`
  border: none;
  border-bottom: 2px solid black;
  margin: 10px 0;

  transition: all 0.3s ease 0s;
  :focus-within {
    background-color: rgba(156, 252, 156, 0.8);
  }
`;

class OpenCardView extends Component {
  state = {};

  handleDashRedirect = () => {
    this.props.dispatch(redirectToDash());
    this.props.dispatch(resetOpenCard());
  };

  handleDelete = () => {
    this.props.dispatch(deleteCard(this.props.openCard._id));
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
        <OpenCardForm>
          <h1>Edit Information</h1>
          <CancelButton onClick={this.handleDashRedirect}>
            <FontAwesomeIcon icon="times" size="lg" />
          </CancelButton>
          <MainFlexContainer>
            <FlexBoxColumn>
              <CardInputLabel htmlFor="companyName">
                Company Name:
              </CardInputLabel>
              <FormInput
                name={"companyName"}
                contentEditable={true}
                defaultValue={companyName}
                onChange={this.handleChange}
              />
              <CardInputLabel htmlFor="postingURL">
                Job Posting Link:
              </CardInputLabel>
              <FormInput
                name={"postingURL"}
                contentEditable={true}
                defaultValue={postingURL}
                onChange={this.handleChange}
              />
              <CardInputLabel htmlFor="contactName">
                Contact Name:
              </CardInputLabel>
              <FormInput
                name={"contactName"}
                contentEditable={true}
                defaultValue={contactName}
                onChange={this.handleChange}
              />
            </FlexBoxColumn>
            <FlexBoxColumn>
              <CardInputLabel htmlFor="contactEmail">
                Contact Email:
              </CardInputLabel>
              <FormInput
                name={"contactEmail"}
                contentEditable={true}
                defaultValue={contactEmail}
                onChange={this.handleChange}
              />
              <CardInputLabel htmlFor="contactPhone">
                Contact Phone:
              </CardInputLabel>
              <FormInput
                name={"contactPhone"}
                contentEditable={true}
                defaultValue={contactPhone}
                onChange={this.handleChange}
              />
              <CardInputLabel htmlFor="date">Date Applied:</CardInputLabel>
              <FormInput
                name={"date"}
                contentEditable={true}
                defaultValue={date}
              />
            </FlexBoxColumn>
          </MainFlexContainer>
          <DeleteBtn onClick={this.handleDelete} type="button">
            Delete Card
          </DeleteBtn>
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
