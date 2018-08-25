import { REDIRECT_TO_DASH, RESET_REDIRECT } from "../actions/dashboardActions";

export const dashboardReducer = (state = false, action) => {
  switch (action.type) {
    case REDIRECT_TO_DASH:
      return true;
    case RESET_REDIRECT:
      return false;
    default:
      return state;
  }
};
