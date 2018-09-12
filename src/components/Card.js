import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { openCard as openCardThunk } from "../actions/cardActions";

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
    const { provided, innerRef } = this.props;
    return (
      <CardItem
        onClick={() => this.props.dispatch(openCardThunk(this.props.workData))}
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

const mapStateToProps = ({ openCard }) => ({
  openCard
});

export default connect(mapStateToProps)(Card);
