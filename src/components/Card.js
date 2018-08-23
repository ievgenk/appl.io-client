import React, { Component } from "react";
import styled from "styled-components";

const CardItem = styled.li`
  background-color: ${props => (props.isDragging ? "lightgreen" : "white")};
  text-align: center;
  padding: 5px 20px;
  font-size: 2.2rem;
  margin-bottom: 10px;
  border-radius: 3px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  width: 350px;
`;

export default class Card extends Component {
  render() {
    const { provided, innerRef } = this.props;
    return (
      <CardItem
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        innerRef={innerRef}
        isDragging={this.props.snapshot.isDragging}
      >
        <h3>{this.props.workData.companyName}</h3>
      </CardItem>
    );
  }
}
