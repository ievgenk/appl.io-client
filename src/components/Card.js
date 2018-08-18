import React, { Component } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

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
    return (
      <Draggable
        draggableId={this.props.workData.id}
        index={this.props.workData.index}
      >
        {provided => (
          <CardItem
            innerRef={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <h3>{this.props.workData.title}</h3>
          </CardItem>
        )}
      </Draggable>
    );
  }
}
