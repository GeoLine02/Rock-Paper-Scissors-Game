import React from "react";
import rock from "../assets/images/icon-rock.svg";
import { useAppContext } from "../context/AppContextProvider";
import { chooseButtonAction } from "../context/actions/actionCreator";

const RockBtn = () => {
  const { state, dispatch } = useAppContext();
  return (
    <div className="w-fit py-5 px-5 bg-white rounded-full border-yellow-400 border-8 outline-none">
      <button
        onClick={() => {
          dispatch(chooseButtonAction({ name: "rock", src: rock }));
        }}
      >
        <img className=" w-16 h-16 md:w-36 md:h-36" src={rock} alt="rock" />
      </button>
    </div>
  );
};

export default RockBtn;
