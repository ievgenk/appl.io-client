import React, { Component } from "react";
import styled from "styled-components";

const CardFormContainer = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  background-color: rgba(12, 12, 12, 0.5);
`;

export default class AddCardForm extends Component {
  render() {
    return <CardFormContainer>Add Card Form</CardFormContainer>;
  }
}
