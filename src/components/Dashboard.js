import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import NavBar from "./NavBar";
import Desk from "./Desk";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddCardForm from "./AddCardForm";
import { connect } from "react-redux";
import { moveCardWithinBoard } from "../actions/boardActions";

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  height: 100vh;
  width: 100vw;
  grid-template-rows: repeat(10, minmax(min-content, 2000px));
`;

class Dashboard extends Component {
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

    const start = this.props.boards.boards[source.droppableId];
    console.log(this.props.boards.boards);
    const finish = this.props.boards.boards[destination.droppableId];

    if (start === finish) {
      const newCardIds = Array.from(start.cardIds);

      newCardIds.splice(source.index, 1);

      newCardIds.splice(destination.index, 0, draggableId);

      const newBoard = {
        ...start,
        cardIds: newCardIds
      };

      // this.setState(state => ({
      //   ...state,
      //   boards: {
      //     ...state.boards,
      //     [newBoard.id]: newBoard
      //   }
      // }));

      this.props.dispatch(moveCardWithinBoard(newBoard));
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
        <Router>
          <DashboardGrid>
            <NavBar btnPresent={true} />
            <Desk
              boards={Object.values(this.props.boards.boards)}
              cards={this.props.cards.cards}
            />
            <Route path="/dashboard/add-card" component={AddCardForm} />
          </DashboardGrid>
        </Router>
      </DragDropContext>
    ) : (
      <Redirect to="/" />
    );
  }
}

Dashboard.defaultProps = {
  isLoggedIn: true
};

const mapStateToProps = ({ boards, cards }) => {
  return {
    boards,
    cards
  };
};

export default connect(mapStateToProps)(Dashboard);
