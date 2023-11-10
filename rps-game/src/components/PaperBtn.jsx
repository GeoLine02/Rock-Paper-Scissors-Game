import React from "react";
import paper from "../assets/images/icon-paper.svg";
import { useAppContext } from "../context/AppContextProvider";
import { chooseButtonAction } from "../context/actions/actionCreator";

const PaperBtn = () => {
  const { state, dispatch } = useAppContext();
  return (
    <div className=" w-fit py-5 px-5 bg-white rounded-full border-blue-500 border-8 outline-none">
      <button
        onClick={() => {
          dispatch(chooseButtonAction({ name: "paper", src: paper }));
        }}
      >
        <img className="w-16 h-16 md:w-36 md:h-36" src={paper} alt="paper" />
      </button>
    </div>
  );
};

export default PaperBtn;
