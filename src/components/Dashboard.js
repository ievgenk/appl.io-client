import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import NavBar from "./NavBar";
import Desk from "./Desk";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  height: 100vh;
  width: 100vw;
  grid-template-rows: repeat(10, 1fr);
`;

export default class Dashboard extends Component {
  state = {
    boards: {
      "board-1": {
        id: "board-1",
        title: "Applied",
        cardIds: ["card-1", "card-2", "card-3", "card-4"]
      },
      "board-2": {
        id: "board-2",
        title: "Offer Received",
        cardIds: ["card-5", "card-6", "card-7", "card-8"]
      }
    },
    cards: {
      "card-1": {
        id: "card-1",
        title: "test-1"
      },
      "card-2": {
        id: "card-2",
        title: "test-2"
      },
      "card-3": {
        id: "card-3",
        title: "test-3"
      },
      "card-4": {
        id: "card-4",
        title: "test-4"
      },
      "card-5": {
        id: "card-5",
        title: "test-5"
      },
      "card-6": {
        id: "card-6",
        title: "test-6"
      },
      "card-7": {
        id: "card-7",
        title: "test-7"
      },
      "card-8": {
        id: "card-8",
        title: "test-8"
      }
    },
    boardOrder: ["board-1", "board-2"]
  };

  onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = this.state.boards[source.droppableId];
    const finish = this.state.boards[destination.droppableId];

    if (start === finish) {
      const newCardIds = Array.from(start.cardIds);

      newCardIds.splice(source.index, 1);

      newCardIds.splice(destination.index, 0, draggableId);

      const newBoard = {
        ...start,
        cardIds: newCardIds
      };

      this.setState(state => ({
        ...state,
        boards: {
          ...state.boards,
          [newBoard.id]: newBoard
        }
      }));
      return;
    }

    /// Moving from one board to another

    const startCardIds = Array.from(start.cardIds);
    startCardIds.splice(source.index, 1);

    const newStart = {
      ...start,
      cardIds: startCardIds
    };

    const finishedCardIds = Array.from(finish.cardIds);
    finishedCardIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      cardIds: finishedCardIds
    };

    this.setState(state => ({
      ...state,
      boards: {
        ...state.boards,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    }));
  };

  render() {
    return this.props.isLoggedIn ? (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <DashboardGrid>
          <NavBar />
          <Desk
            boards={Object.values(this.state.boards)}
            cards={this.state.cards}
          />
        </DashboardGrid>
      </DragDropContext>
    ) : (
      <Redirect to="/" />
    );
  }
}

Dashboard.defaultProps = {
  isLoggedIn: true
};
