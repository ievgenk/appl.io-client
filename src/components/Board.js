import React, { Component } from "react";
import styled from "styled-components";

const BoardWrapper = styled.div`
  height: 40%;
  min-width: 20%;
  background-color: lightgray;
  margin: 20px;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: black;
`;

export default class Board extends Component {
  render() {
    const { title } = this.props.boardData;
    return (
      <BoardWrapper>
        <h1>{title}</h1>
      </BoardWrapper>
    );
  }
}
