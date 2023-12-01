import { useRef, useState } from "react";
import { generateMatrix } from "./utils/matrix.util";
import { nextGeneration } from "./utils/game-of-life";
import { getSpeed } from "./utils/speed";
import Board from "./components/board/Board";
import Play from "./assets/icons/MdiPlay.svg";
import Pause from "./assets/icons/MdiPause.svg";
import Dock from "./components/dock/Dock";

const App = () => {

  const [boardState, setBoardState] = useState(generateMatrix(80, 130));
  const [generationState, setGenerationState] = useState(0);
  const [playIconState, setPlayIconState] = useState(Play);
  const [speedState, setSpeedState] = useState(100);

  const intervalRef = useRef();

  const handleNextGeneration = () => setNextGeneration();

  const setNextGeneration = () => {
    setBoardState(board => nextGeneration(board));
    setGenerationState(current => current + 1);
  }

  const handleSpeedChange = (event) => {
    const sliderValue = event.target.value
    setSpeedState(sliderValue);

    const speedMs = getSpeed(sliderValue);

    // Update interval
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => setNextGeneration(), speedMs);
  }

  const handlePlay = () => {
    if (playIconState === Play) {
      setPlayIconState(Pause);
      const speedMs = getSpeed(speedState);
      intervalRef.current = setInterval(() => setNextGeneration(), speedMs);
    } else {
      setPlayIconState(Play);
      clearInterval(intervalRef.current);
    }
  }

  const handleCellClick = (rowPosition, columnPosition) => {
    const update = [...boardState];
    update[rowPosition][columnPosition] = !update[rowPosition][columnPosition]
    setBoardState(update);
  }


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
      <Board
        boardState={boardState}
        onCellClick={handleCellClick}
      />
      
    </>
  )
}

export default App
