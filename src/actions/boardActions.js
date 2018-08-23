import { refreshStore } from "../actions/globalActions";

export const MOVE_CARD_WITHIN = "MOVE_CARD_WITHIN";
export const MOVE_CARD_ACROSS = "MOVE_CARD_ACROSS";

export const moveCardWithinBoard = newBoard => dispatch => {
  // Updating UI optimistically

  dispatch({
    type: MOVE_CARD_WITHIN,
    newBoard
  });

  //Sending new position to the server

  const moveCardWithinBoardAsync = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.9) {
          reject("Failed :(");
        } else {
          resolve();
        }
      }, 300);
    });
  };

  moveCardWithinBoardAsync().then(() => {
    dispatch(refreshStore());
  });
};

export const moveCardToOtherBoard = (startBoard, finishBoard) => dispatch => {
  // Updating UI optimistically

  dispatch({
    type: MOVE_CARD_ACROSS,
    startBoard,
    finishBoard
  });

  //Sending new position to the server

  const moveCardAcrossBoardAsync = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.9) {
          reject("Failed :(");
        } else {
          resolve();
        }
      }, 300);
    });
  };

  moveCardAcrossBoardAsync().then(() => {
    dispatch(refreshStore());
  });
};
