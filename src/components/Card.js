import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { openCardAction } from "../actions/cardActions";
import { Redirect } from "react-router-dom";

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

class Card extends Component {
  render() {
    const { provided, innerRef, openCard } = this.props;
    return (
      <Fragment>
        <CardItem
          onClick={() =>
            this.props.dispatch(openCardAction(this.props.workData))
          }
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          innerRef={innerRef}
          isDragging={this.props.snapshot.isDragging}
        >
          <h3>{this.props.workData.companyName}</h3>
        </CardItem>
        {Object.keys(openCard).length !== 0 ? (
          <Redirect to={`/dashboard/card/${openCard._id}`} />
        ) : (
          ""
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = ({ openCard }) => ({
  openCard
});

export default connect(mapStateToProps)(Card);
