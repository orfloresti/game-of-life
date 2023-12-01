import { nextGeneration } from "./game-of-life";
import { getSpeed } from "./speed";
import Play from "../assets/icons/MdiPlay.svg";
import Pause from "../assets/icons/MdiPause.svg";

/**
 * 
 * @param {*} setBoardState 
 * @param {*} setGenerationState 
 */
export const setNextGeneration = (setBoardState, setGenerationState) => {
  setBoardState((board) => nextGeneration(board));
  setGenerationState((current) => current + 1);
};

/**
 * 
 * @param {*} playIconState 
 * @param {*} intervalRef 
 * @param {*} speedState 
 * @param {*} setBoardState 
 * @param {*} setGenerationState 
 * @param {*} setPlayIconState 
 */
export const setPlayState = (
  playIconState,
  intervalRef,
  speedState,
  setBoardState,
  setGenerationState,
  setPlayIconState,
) => {
  if (playIconState === Play) {
    setPlayIconState(Pause);
    const speedMs = getSpeed(speedState);
    intervalRef.current = setInterval(
      () => setNextGeneration(setBoardState, setGenerationState),
      speedMs,
    );
  } else {
    setPlayIconState(Play);
    clearInterval(intervalRef.current);
  }
};

/**
 * 
 * @param {*} event 
 * @param {*} intervalRef 
 * @param {*} setBoardState 
 * @param {*} setGenerationState 
 * @param {*} setSpeedState 
 * @param {*} setPlayIconState 
 */
export const setSpeed = (
  event,
  intervalRef,
  setBoardState,
  setGenerationState,
  setSpeedState,
  setPlayIconState,
) => {
  const sliderValue = event.target.value;
  setSpeedState(sliderValue);

  const speedMs = getSpeed(sliderValue);

  // Update interval
  clearInterval(intervalRef.current);
  intervalRef.current = setInterval(
    () => setNextGeneration(setBoardState, setGenerationState),
    speedMs,
  );
  setPlayIconState(Pause);
};


/**
 * 
 * @param {*} boardState 
 * @param {*} rowPosition 
 * @param {*} columnPosition 
 * @param {*} setBoardState 
 */
export const setUpdateCell = (
  boardState,
  rowPosition,
  columnPosition,
  setBoardState,
) => {
  const update = [...boardState];
  update[rowPosition][columnPosition] = !update[rowPosition][columnPosition];
  setBoardState(update);
};
