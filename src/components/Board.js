import React, { Component } from "react";
import styled from "styled-components";
import Card from "./Card";
import { Droppable } from "react-beautiful-dnd";

const BoardWrapper = styled.div`
  height: 70%;
  min-width: 25%;
  background-color: lightgray;
  margin: 20px;
  display: flex;
  flex-direction: column;
  text-align: left;
  color: black;
  margin-top: 55px;
  border-radius: 5px;

  header {
    margin-left: 2rem;
    font-size: 3rem;
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
`;

export default class Board extends Component {
  render() {
    const { title, id } = this.props.boardData;
    return (
      <BoardWrapper>
        <header>{title}</header>
        <Droppable droppableId={id}>
          {provided => (
            <CardList innerRef={provided.innerRef} {...provided.droppableProps}>
              {this.props.workCards.map((card, index) => (
                <Card key={card.id} workData={card} index={index} />
              ))}
              {provided.placeholder}
            </CardList>
          )}
        </Droppable>
      </BoardWrapper>
    );
  }
}

// Board.defaultProps = {
//   workcards: [
//     { title: "Random Title, just long enough" },
//     { title: "Random Title, just long enough" },
//     { title: "Random Title, just long enoughasdsadas dsad asdasad " },
//     { title: "Random Title, just long enough" },
//     { title: "Random Title, just long enough" },
//     { title: "Random Title, just long enough" },
//     { title: "Random Title, just long enoughasdsadas dsad asdasad " },
//     { title: "Random Title, just long enough" }
//   ]
// };
