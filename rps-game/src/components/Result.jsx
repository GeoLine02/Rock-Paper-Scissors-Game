import React from "react";
import { useAppContext } from "../context/AppContextProvider";

const Result = () => {
  const {
    state: { result },
    dispatch,
  } = useAppContext();

  return (
    <div>
      {result == 0 && <h1 className="text-3xl">Tie</h1>}
      {result == 1 && <h1 className="text-3xl">Player 1 Win</h1>}
      {result == 2 && <h1 className="text-3xl">Player 2 Win</h1>}
    </div>
  );
};

export default Result;
