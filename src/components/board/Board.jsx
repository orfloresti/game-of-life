import PropTypes from 'prop-types';
import Cell from "../cell/Cell";
import { useRef, useState } from 'react';
import { generateMatrix } from '../../utils/matrix.util';
import { getPopulation, nextGeneration } from '../../utils/game-of-life.js';
import Step from "../../assets/icons/MdiSkipNext.svg";
import Play from "../../assets/icons/MdiPlay.svg";
import Pause from "../../assets/icons/MdiPause.svg";
import styles from "./board.module.scss";

const getSpeed = (sliderValue) => {
  const speedMs = -20 * sliderValue + 2000;
  return speedMs;
}

const Board = () => {

  const [boardState, setBoardState] = useState(generateMatrix(80, 130));
  const [generationState, setGenerationState] = useState(0);
  const [playIconState, setPlayIconState] = useState(Play);
  const [speedState, setSpeedState] = useState(100);

  const intervalRef = useRef();

  const handleCellClick = (rowPosition, columnPosition) => {
    const update = [...boardState];
    update[rowPosition][columnPosition] = !update[rowPosition][columnPosition]
    setBoardState(update);
  }

  const handlePlay = () => {
    if( playIconState === Play ) {
      setPlayIconState(Pause);
      const speedMs = getSpeed(speedState);
      intervalRef.current = setInterval( ()=> setNextGeneration(), speedMs);
    } else {
      setPlayIconState(Play);
      clearInterval(intervalRef.current);
    }
  }

  const handleNextGeneration = () => setNextGeneration();

  const setNextGeneration = () => {
    setBoardState(board => nextGeneration(board));    
    setGenerationState(current => current + 1);
  }

  const handleSpeedChange = (event) => {
    const sliderValue = event.target.value
    setSpeedState(sliderValue);

    // considering the slider from 0 to 100 and the speed from 0 to 2000ms
    const speedMs = getSpeed(sliderValue);

    // Update interval
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval( ()=> setNextGeneration(), speedMs);
  }


  return (
    <>
      <div className={styles.panelControlWrapper}>
        <div className={styles.panelBackground}>
          
          <div className={styles.controlsButtons}>           

            <button className={styles.control} onClick={handlePlay} title='Play/Pause'>
              <img src={playIconState} height="64px" />
            </button>
            
            <button className={styles.control} onClick={handleNextGeneration} title='Next generation'>
              <img src={Step} height="40px"/>
            </button>
            
            <div className={styles.control} >
              <input type="range" min="1" max="100" title='Speed' value={speedState} onChange={handleSpeedChange} className={styles.speed} />
            </div>
            
          </div>
          
          <div className={styles.controlsInfo}>
              <p className={styles.title}>{`Conway's Game Of Life`}</p>
              <p className={styles.info}>
                <span className={styles.infoLabel}>{'Generation: '}</span>{generationState}
                <span>{' '}</span>
                <span className={styles.infoLabel}>{'Population: '}</span>{getPopulation(boardState)}
              </p>
          </div>

        </div>
      </div>
      <table>
        <tbody>
        {
          boardState.map((row, rowPosition) =>
            <tr key={`${rowPosition}`}>
              {row.map((_, columnPosition) =>
                <th key={`${columnPosition}`}>
                  <Cell
                    key={`${rowPosition} ${columnPosition}`}
                    rowPosition={rowPosition}
                    columnPosition={columnPosition}
                    cellState={boardState[rowPosition][columnPosition]}
                    onCellClick={handleCellClick}
                  />
                </th>
              )}
            </tr>
          )
        }
        </tbody>
      </table>
    </>
  )
}

export default Board;

Board.propTypes = {
  rows: PropTypes.number,
  columns: PropTypes.number,
}