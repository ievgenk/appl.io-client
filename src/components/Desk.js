import React from "react";
import styled from "styled-components";
import Board from "./Board";

const DeskContainer = styled.div`
  background-color: #2183ce;
  width: 100%;
  height: 100vh;
  overflow-x: auto;
  /* grid-column: 1 / -1; */
  display: flex;

  > * {
    flex: 0 0 auto;
    margin-left: 10px;
  }
`;

const Desk = ({ boards, cards }) => {
  return (
    <DeskContainer>
      {boards.map(board => (
        <Board
          key={board.id}
          boardData={board}
          workCards={board.cardIds.map(id => cards[id])}
        />
      ))}
    </DeskContainer>
  );
};
export default Desk;
