import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR
} from "../actions/authActions";
import { toast } from "react-toastify";
import { css } from "glamor";

const initialState = {
  loading: false,
  login: {
    userId: "",
    token: null,
    error: null
  },
  register: {
    success: false,
    message: null,
    error: null
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        loading: true
      };

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        login: {
          ...state.login,
          userId: action.userId,
          token: action.token
        }
      };

    case LOGIN_USER_ERROR:
      toast.error(`${action.errorMessage}`, {
        bodyClassName: css({
          fontSize: "40px"
        })
      });
      return {
        ...state,
        loading: false,
        login: {
          ...state.login,
          error: action.errorMessage
        }
      };

    case REGISTER_USER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case REGISTER_USER_SUCCESS:
      toast(`${action.message} 👍`, {
        bodyClassName: css({
          fontSize: "40px"
        })
      });
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
      toast.error(`${action.message}`, {
        bodyClassName: css({
          fontSize: "40px"
        })
      });
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
