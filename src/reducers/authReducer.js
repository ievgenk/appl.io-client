import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR
} from "../actions/authActions";

const initialState = {
  loading: false,
  login: {
    loggedIn: false,
    error: null,
    success: false
  },
  register: {
    success: false,
    error: null
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER_REQUEST:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
};
