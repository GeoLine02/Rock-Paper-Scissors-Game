import React from "react";
import { useAppContext } from "../context/AppContextProvider";
import { clearChoicesAction } from "../context/actions/actionCreator";

const PlayAgain = () => {
  const { state, dispatch } = useAppContext();
  return (
    <button
      onClick={() => {
        dispatch(clearChoicesAction());
      }}
      className="border-white border-2 rounded-md py-3 px-3 hover:bg-white hover:text-black"
    >
      Play Again
    </button>
  );
};

export default PlayAgain;
