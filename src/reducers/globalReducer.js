import { REFRESH_STORE_SUCCESS } from "../actions/globalActions";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case REFRESH_STORE_SUCCESS:
      let boardObj = {};
      action.retrievedBoards.forEach(board => (boardObj[board._id] = board));

      return {
        ...state,
        boards: boardObj
      };

    default:
      return state;
  }
};
