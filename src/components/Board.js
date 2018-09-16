import React, { Component } from "react";
import styled from "styled-components";
import Card from "./Card";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { connect } from "react-redux";

const BoardWrapper = styled.div`
  /* height: 70%; */
  min-width: 25%;
  background-color: lightgray;
  margin: 20px;
  display: flex;
  flex-direction: column;
  text-align: left;
  color: black;
  margin-top: 55px;
  border-radius: 5px;
  height: fit-content;

  header {
    margin-left: 2rem;
    font-size: 3.5rem;
    font-weight: bolder;
    padding: 10px;
  }
`;

const CardList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  min-height: 250px;
`;

class Board extends Component {
  render() {
    const { title, _id } = this.props.boardData;
    return (
      <BoardWrapper>
        <header>{title}</header>
        <Droppable droppableId={_id}>
          {provided => (
            <CardList innerRef={provided.innerRef} {...provided.droppableProps}>
              {this.props.workCards.map((card, index) => (
                <Draggable key={card._id} draggableId={card.id} index={index}>
                  {(provided, snapshot) => (
                    <Card
                      innerRef={provided.innerRef}
                      provided={provided}
                      workData={card}
                      snapshot={snapshot}
                    />
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </CardList>
          )}
        </Droppable>
      </BoardWrapper>
    );
  }
}

const mapStateToProps = ({ cards }) => {
  return {
    cards
  };
};

export default connect(mapStateToProps)(Board);
