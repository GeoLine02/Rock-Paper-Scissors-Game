import appActions from "../actions/actions";

export const initialState = {
  isButtonSelected: false,
  selectedButtons: [],
  result: "",
};

export const appContextReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case appActions.chooseButton: {
      return {
        ...state,
        isButtonSelected: true,
        selectedButtons: [...state.selectedButtons, actions.payload],
      };
    }
    case appActions.displayResult: {
      return {
        ...state,
        result: actions.payload,
      };
    }
    case appActions.clearChoices: {
      return {
        ...state,
        selectedButtons: [],
      };
    }

    default:
      return state;
  }
};
