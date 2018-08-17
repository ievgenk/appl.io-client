import React from "react";
import styled from "styled-components";
import Board from "./Board";

const DeskWrapper = styled.div`
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

const Desk = ({ boards }) => {
  return (
    <DeskWrapper>
      {boards.map(board => (
        <Board boardData={board} />
      ))}
    </DeskWrapper>
  );
};

Desk.defaultProps = {
  boards: [
    { title: "Applied" },
    { title: "Phone Screen" },
    { title: "Interview" },
    { title: "Rejected" },
    { title: "Offer Given" }
  ]
};

export default Desk;
