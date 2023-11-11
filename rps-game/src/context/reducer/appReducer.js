import appActions from "../actions/actions";

export const initialState = {
  selectedButtons: [],
  result: null,
};

export const appContextReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case appActions.chooseButton: {
      const selectedButtons = actions.payload;
      const UpdatedSelectedButtons = [
        ...state.selectedButtons,
        selectedButtons,
      ];
      if (UpdatedSelectedButtons.length === 2) {
        const [button1, button2] = UpdatedSelectedButtons;
        if (
          (button1.name === "rock" && button2.name === "scissors") ||
          (button1.name === "paper" && button2.name === "rock") ||
          (button1.name === "scissors" && button2.name === "paper")
        ) {
          state.result = 1;
        } else if (button1.name !== button2.name) {
          state.result = 2;
        } else {
          state.result = 0;
        }
      }

      return {
        ...state,
        selectedButtons: [...state.selectedButtons, actions.payload],
      };
    }

    case appActions.clearChoices: {
      return {
        ...state,
        selectedButtons: [],
      };
    }

    case appActions.clearResult: {
      return {
        ...state,
        result: null,
      };
    }

    default:
      return state;
  }
};
