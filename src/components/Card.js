import React, { Component } from "react";
import styled from "styled-components";

const CardItem = styled.li`
  background-color: white;
  text-align: center;
  padding: 5px 20px;
  font-size: 1.5rem;
  margin-bottom: 10px;
  border-radius: 3px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  width: 300px;
`;

export default class Card extends Component {
  render() {
    const { provided, innerRef } = this.props;
    return (
      <CardItem
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        innerRef={innerRef}
      >
        <h3>{this.props.workData.title}</h3>
      </CardItem>
    );
  }
}
