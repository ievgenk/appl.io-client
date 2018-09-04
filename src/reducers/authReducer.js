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
    message: "",
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
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        register: {
          success: true,
          message: action.message,
          error: null
        }
      };

    case REGISTER_USER_ERROR:
      return {
        ...state,
        loading: false,
        register: {
          success: false,
          message: "",
          error: action.message
        }
      };

    default:
      return state;
  }
};
