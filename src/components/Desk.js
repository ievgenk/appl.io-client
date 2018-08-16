import React from "react";
import styled from "styled-components";
import Board from "./Board";

const DeskWrapper = styled.div`
  background-color: #2183ce;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
    { title: "Interview" }
    // { title: "Rejected" },
    // { title: "Offer Given" }
  ]
};

export default Desk;
