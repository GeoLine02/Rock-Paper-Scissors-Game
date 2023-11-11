import PaperBtn from "./components/PaperBtn";
import RockBtn from "./components/RockBtn";
import { ScissorsBtn } from "./components/ScissorsBtn";
import { useAppContext } from "./context/AppContextProvider";
import Result from "./components/Result";
import PlayAgain from "./components/PlayAgain";
import RulesModal from "./components/RulesModal";
import Rules from "./assets/images/image-rules.svg";
import { useEffect, useState } from "react";

function App() {
  const { state } = useAppContext();
  const [modalOpen, setModalOpen] = useState(false);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  useEffect(() => {
    if (state.result === 1) {
      setPlayer1Score((prev) => prev + 1);
    } else if (state.result === 2) {
      setPlayer2Score((prev) => prev + 1);
    }
  }, [state.result]);

  return (
    <div className="h-screen bg-blue-900 text-white py-5 px-5 flex flex-col gap-5 justify-center items-center text-center">
      {state.selectedButtons.length === 0 && (
        <div>
          <div className="flex gap-5 pb-5 md:justify-around">
            <div className="border-white rounded-lg border-2 w-fit py-3 px-3">
              <h1 className="text-3xl">Player 1</h1>
              <h3 className="text-xl">score: {player1Score}</h3>
            </div>
            <div className="border-white rounded-lg border-2 w-fit py-3 px-3">
              <h1 className="text-3xl">Player 2</h1>
              <h3 className="text-xl">score: {player2Score}</h3>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl">It's Player 1's turn</h1>
            <div className="flex flex-col justify-center items-center gap-2 md:flex-row md:gap-6">
              <RockBtn />
              <PaperBtn />
              <ScissorsBtn />
            </div>
          </div>
        </div>
      )}
      {state.selectedButtons.length === 1 && (
        <div>
          <div className="flex gap-5 pb-5 md:justify-around">
            <div className="border-white rounded-lg border-2 w-fit py-3 px-3">
              <h1 className="text-3xl">Player 1</h1>
              <h3 className="text-xl">score: {player1Score}</h3>
            </div>
            <div className="border-white rounded-lg border-2 w-fit py-3 px-3">
              <h1 className="text-3xl">Player 2</h1>
              <h3 className="text-xl">score: {player2Score}</h3>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl">It's Player 2's turn</h1>
            <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:gap-6">
              <RockBtn />
              <PaperBtn />
              <ScissorsBtn />
            </div>
          </div>
        </div>
      )}
      {state.selectedButtons.length === 2 && (
        <div>
          <div className="flex gap-5 pb-5 md:justify-around">
            <div className="border-white rounded-lg border-2 w-fit py-3 px-3">
              <h1 className="text-3xl">Player 1</h1>
              <h3 className="text-xl">score: {player1Score}</h3>
            </div>
            <div className="border-white rounded-lg border-2 w-fit py-3 px-3">
              <h1 className="text-3xl">Player 2</h1>
              <h3 className="text-xl">score: {player2Score}</h3>
            </div>
          </div>
          <div className="flex flex-col gap-4 justify-around items-center md:flex-row">
            <div className="flex flex-col items-center gap-3">
              <h3 className="text-3xl">Player 1's choice</h3>
              <div className=" w-fit py-5 px-5 bg-white border-yellow-500 rounded-full border-8">
                <img
                  className="w-14 h-14 md:w-36 md:h-36"
                  src={state.selectedButtons[0].src}
                  alt={state.selectedButtons[0].name}
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <Result />
              <PlayAgain />
            </div>
            <div className="flex flex-col items-center gap-3">
              <h3 className="text-3xl">Player 2's choice</h3>
              <div className=" w-fit py-5 px-5 bg-white border-red-500 rounded-full border-8">
                <img
                  className="w-14 h-14 md:w-36 md:h-36"
                  src={state.selectedButtons[1].src}
                  alt={state.selectedButtons[1].name}
                />
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-end">
        <div>
          <button
            onClick={() => {
              setModalOpen(true);
            }}
            className="border-solid outline-none border-white border-2 py-3 px-8 rounded-md hover:text-black hover:bg-white  bottom-7 right-7 md:absolute md:bottom-5 md:right-5"
          >
            rules
          </button>
        </div>
        <div>
          <RulesModal
            open={modalOpen}
            onClose={() => {
              setModalOpen(false);
            }}
          >
            <div>
              <img src={Rules} />
            </div>
          </RulesModal>
        </div>
      </div>
    </div>
  );
}

export default App;
