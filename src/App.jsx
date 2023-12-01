import { useRef, useState } from "react";
import { generateMatrix } from "./utils/matrix.util";
import {
  setNextGeneration,
  setPlayState,
  setSpeed,
  setUpdateCell,
} from "./utils/app.util";
import Board from "./components/board/Board";
import Play from "./assets/icons/MdiPlay.svg";
import Dock from "./components/dock/Dock";

const App = () => {
  const [boardState, setBoardState] = useState(generateMatrix(80, 130));
  const [generationState, setGenerationState] = useState(0);
  const [playIconState, setPlayIconState] = useState(Play);
  const [speedState, setSpeedState] = useState("100");

  const intervalRef = useRef();

  const handleNextGeneration = () =>
    setNextGeneration(setBoardState, setGenerationState);

  const handleSpeedChange = (event) =>
    setSpeed(
      event,
      intervalRef,
      setBoardState,
      setGenerationState,
      setSpeedState,
      setPlayIconState,
    );

  const handlePlay = () =>
    setPlayState(
      playIconState,
      intervalRef,
      speedState,
      setBoardState,
      setGenerationState,
      setPlayIconState,
    );

  const handleCellClick = (rowPosition, columnPosition) =>
    setUpdateCell(boardState, rowPosition, columnPosition, setBoardState);

  return (
    <>
      <Dock
        boardState={boardState}
        generationState={generationState}
        playIconState={playIconState}
        speedState={speedState}
        onNextGeneration={handleNextGeneration}
        onChangeSpeed={handleSpeedChange}
        onPlay={handlePlay}
      />
      <Board boardState={boardState} onCellClick={handleCellClick} />
    </>
  );
};

export default App;
