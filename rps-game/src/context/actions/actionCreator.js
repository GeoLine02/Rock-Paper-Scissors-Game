import appActions from "./actions";

export const chooseButtonAction = (payload) => {
  return {
    type: appActions.chooseButton,
    payload,
  };
};

export const displayResultAction = () => {
  return {
    type: appActions.displayResult,
  };
};

export const clearChoicesAction = () => {
  return {
    type: appActions.clearChoices,
  };
};

export const clearResultAction = () => {
  return {
    type: appActions.clearResult,
  };
};

export const countScoreAction = (payload) => {
  return {
    type: appActions.countScores,
    payload,
  };
};
