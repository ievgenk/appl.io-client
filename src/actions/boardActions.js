export const MOVE_CARD_WITHIN = "MOVE_CARD_WITHIN";

export const moveCardWithinBoard = newBoard => {
  return {
    type: MOVE_CARD_WITHIN,
    newBoard
  };
};
