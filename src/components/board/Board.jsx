import PropTypes from 'prop-types';
import Cell from "../cell/Cell";
import { getPopulation } from '../../utils/game-of-life.js';
import Step from "../../assets/icons/MdiSkipNext.svg";
import styles from "./board.module.scss";

const Board = ({boardState, generationState, playIconState, speedState, onNextGeneration, onChangeSpeed, onPlay, onCellClick }) => {

  return (
    <>
      <div className={styles.panelControlWrapper}>
        <div className={styles.panelBackground}>
          
          <div className={styles.controlsButtons}>           

            <button className={styles.control} onClick={onPlay} title='Play/Pause'>
              <img src={playIconState} height="64px" />
            </button>
            
            <button className={styles.control} onClick={onNextGeneration} title='Next generation'>
              <img src={Step} height="40px"/>
            </button>
            
            <div className={styles.control} >
              <input type="range" min="1" max="100" title='Speed' value={speedState} onChange={onChangeSpeed} className={styles.speed} />
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
                    onCellClick={onCellClick}
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
  boardState: PropTypes.array,
  generationState: PropTypes.number, 
  playIconState: PropTypes.object,
  speedState: PropTypes.number,
  onNextGeneration: PropTypes.func,
  onChangeSpeed: PropTypes.func,
  onPlay: PropTypes.func,
  onCellClick: PropTypes.func,
}