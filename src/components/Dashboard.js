import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import NavBar from "./NavBar";
import Desk from "./Desk";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";
import { Route } from "react-router-dom";
import AddCardForm from "./AddCardForm";
import { connect } from "react-redux";
import {
  moveCardWithinBoard,
  moveCardToOtherBoard
} from "../actions/boardActions";
import { refreshStore } from "../actions/globalActions";
import OpenCardView from "./OpenCardView";
import { resetRedirect } from "../actions/dashboardActions";

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  height: 100vh;
  width: 100vw;
  grid-template-rows: repeat(10, minmax(min-content, 2000px));
`;

class Dashboard extends Component {
  componentDidMount = () => {
    this.props.dispatch(refreshStore());
  };

  componentDidUpdate = () => {
    if (this.props.toDashboard === true) {
      this.props.dispatch(resetRedirect());
    }
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

    const start = this.props.boards[source.droppableId];
    const finish = this.props.boards[destination.droppableId];

    if (start === finish) {
      const newCardIds = Array.from(start.cardIds);

      newCardIds.splice(source.index, 1);

      newCardIds.splice(destination.index, 0, draggableId);

      const newBoard = {
        ...start,
        cardIds: newCardIds
      };
      console.log(newBoard);

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

    this.props.dispatch(moveCardToOtherBoard(newStart, newFinish));
  };

  render() {
    return this.props.isLoggedIn ? (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <DashboardGrid>
          <NavBar btnPresent={true} />
          <Desk
            boards={Object.values(this.props.boards)}
            cards={this.props.cards}
          />
          <Route exact path="/dashboard/add-card" component={AddCardForm} />
          <Route exact path="/dashboard/card/:id" component={OpenCardView} />
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

const mapStateToProps = state => {
  return {
    boards: state.boards,
    cards: state.cards,
    toDashboard: state.toDashboard
  };
};

export default connect(mapStateToProps)(Dashboard);
