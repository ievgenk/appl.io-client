export const REDIRECT_TO_DASH = "REDIRECT_TO_DASH";
export const RESET_REDIRECT = "RESET_REDIRECT";

export const redirectToDash = () => {
  return {
    type: REDIRECT_TO_DASH
  };
};

export const resetRedirect = () => {
  return {
    type: RESET_REDIRECT
  };
};
