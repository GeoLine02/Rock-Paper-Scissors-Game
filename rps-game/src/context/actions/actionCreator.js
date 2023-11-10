import appActions from "./actions";

export const chooseButtonAction = (payload) => {
  return {
    type: appActions.chooseButton,
    payload,
  };
};

export const displayResultAction = (payload) => {
  return {
    type: appActions.displayResult,
    payload,
  };
};

export const clearChoicesAction = () => {
  return {
    type: appActions.clearChoices,
  };
};
