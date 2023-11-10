import React from "react";
import { useAppContext } from "../context/AppContextProvider";
import { displayResultAction } from "../context/actions/actionCreator";

const Result = () => {
  const {
    state: { selectedButtons },
    dispatch,
  } = useAppContext();

  return (
    <div>
      {selectedButtons[0].name === "rock" &&
        selectedButtons[1].name === "paper" && (
          <h1 className="text-3xl">Player 2 Win</h1>
        )}
      {selectedButtons[0].name === "paper" &&
        selectedButtons[1].name === "rock" && (
          <h1 className="text-3xl">Player 1 Win</h1>
        )}
      {selectedButtons[0].name === "rock" &&
        selectedButtons[1].name === "scissors" && (
          <h1 className="text-3xl">Player 1 win</h1>
        )}
      {selectedButtons[0].name === "scissors" &&
        selectedButtons[1].name === "rock" && (
          <h1 className="text-3xl">Player 2 win</h1>
        )}
      {selectedButtons[0].name === "paper" &&
        selectedButtons[1].name === "scissors" && (
          <h1 className="text-3xl">Player 2 win</h1>
        )}
      {selectedButtons[0].name === "scissors" &&
        selectedButtons[1].name === "paper" && (
          <h1 className="text-3xl">Player 1 win</h1>
        )}
      {selectedButtons[0].name === selectedButtons[1].name && (
        <h1 className="text-3xl">Tie</h1>
      )}
    </div>
  );
};

export default Result;
