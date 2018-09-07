import { REFRESH_STORE_SUCCESS } from "../actions/globalActions";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case REFRESH_STORE_SUCCESS:
      return {
        ...state,
        boards: action.retrievedBoards
      };

    default:
      return state;
  }
};
