import React from "react";
import styled from "styled-components";
import Board from "./Board";

const DeskContainer = styled.div`
  background-color: #2183ce;
  max-height: 100%;
  width: 100%;
  display: flex;
  overflow-x: auto;
  grid-column: 1 / -1;
  grid-row: 2 / -1;

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

// Desk.defaultProps = {
//   boards: [
//     { title: "Applied" },
//     { title: "Phone Screen" },
//     { title: "Interview" },
//     { title: "Rejected" },
//     { title: "Offer Given" }
//   ]
// };

export default Desk;
