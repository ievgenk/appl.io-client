export const MOVE_CARD_WITHIN = "MOVE_CARD_WITHIN";
export const MOVE_CARD_ACROSS = "MOVE_CARD_ACROSS";

export const moveCardWithinBoard = newBoard => {
  return {
    type: MOVE_CARD_WITHIN,
    newBoard
  };
};

export const moveCardToOtherBoard = (startBoard, finishBoard) => {
  return {
    type: MOVE_CARD_ACROSS,
    startBoard,
    finishBoard
  };
};
