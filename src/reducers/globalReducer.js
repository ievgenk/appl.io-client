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

      //Creating board property on a global object for Redux store

      let boardObj = {};
      newBoardArray.forEach(board => (boardObj[board._id] = board));

      console.log(action.retrievedBoards);

      return {
        ...state,
        boards: boardObj
      };

    default:
      return state;
  }
};
