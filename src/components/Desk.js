import React from "react";
import styled from "styled-components";
import Board from "./Board";
import Statistics from "./Statistics";

const DeskContainer = styled.div`
  background-color: #2183ce;
  width: 100%;
  height: 100vh;
  overflow-x: auto;
  display: flex;

  > * {
    flex: 0 0 auto;
    margin-left: 10px;
  }
`;

const Desk = ({ boards, cards, router }) => {
  let route = router.location.pathname;
  return route !== "/dashboard/statistics" ? (
    <DeskContainer>
      {boards.map(board => (
        <Board
          key={board.id}
          boardData={board}
          workCards={board.cardIds.map(id => cards[id])}
        />
      ))}
    </DeskContainer>
  ) : (
    <Statistics />
  );
};
export default Desk;
