import { REFRESH_STORE_SUCCESS } from "../actions/globalActions";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case REFRESH_STORE_SUCCESS:
      //Restructuring Redux Store to the needed shape, giving boards cardIds property

      let newBoardArray = action.retrievedBoards.map(board => {
        let cardIds = [];

        board.cards.forEach(card => cardIds.push(card._id));

        return {
          ...board,
          cardIds
        };
      });

      //Creating a seperate main level Card Object

      let cardArr = [];
      let cardObj = {};

      action.retrievedBoards.forEach(board => {
        if (board.cards.length !== 0) {
          board.cards.forEach(card => cardArr.push(card));
        }
      });

      cardArr.forEach(card => (cardObj[card._id] = card));

      //Creating board property on a global object for Redux store

      let boardObj = {};
      newBoardArray.forEach(board => (boardObj[board._id] = board));

      return {
        ...state,
        boards: boardObj,
        cards: cardObj
      };

    default:
      return state;
  }
};
