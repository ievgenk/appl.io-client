import { REDIRECT_TO_DASH } from "../actions/dashboardActions";

export const dashboardReducer = (state = false, action) => {
  switch (action.type) {
    case REDIRECT_TO_DASH:
      return !state;
    default:
      return state;
  }
};
