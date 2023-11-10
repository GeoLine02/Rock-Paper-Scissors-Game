import React from "react";
import scissors from "../assets/images/icon-scissors.svg";
import { useAppContext } from "../context/AppContextProvider";
import { chooseButtonAction } from "../context/actions/actionCreator";

export const ScissorsBtn = () => {
  const { state, dispatch } = useAppContext();
  return (
    <div className="w-fit py-5 px-5 bg-white rounded-full border-red-500 border-8 outline-none">
      <button
        onClick={() => {
          dispatch(chooseButtonAction({ name: "scissors", src: scissors }));
        }}
      >
        <img
          className="w-16 h-16 md:h-36 md:w-36"
          src={scissors}
          alt="scissors"
        />
      </button>
    </div>
  );
};
