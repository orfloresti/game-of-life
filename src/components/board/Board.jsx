import PropTypes from 'prop-types';
import Cell from "../cell/Cell";
import { useRef, useState } from 'react';
import { generateMatrix } from '../../utils/matrix.util';
import { getPopulation, nextGeneration } from '../../utils/game-of-life.js';

const Board = () => {

  const [boardState, setBoardState] = useState(generateMatrix(9,9));
  const [generationState, setGenerationState] = useState(0);
  const [playControlState, setPlayControlState ] = useState('Play');

  const intervalRef = useRef();

  const handleCellClick = (rowPosition, columnPosition) => {
    const update = [...boardState];
    update[rowPosition][columnPosition] = !update[rowPosition][columnPosition]
    setBoardState(update);
  }

  const handlePlay = () => {
    if( playControlState === 'Play' ) {
      setPlayControlState('Pause');
      intervalRef.current = setInterval( ()=> setNextGeneration(), 1000);
    } else {
      setPlayControlState('Play');
      clearInterval(intervalRef.current);
    }
  }

  const handleNextGeneration = () => setNextGeneration();

  const setNextGeneration = () => {
    setBoardState(board => nextGeneration(board));    
    setGenerationState(current => current + 1);
  }


  return (
    <>
      <button style={{width: '80px'}} onClick={handlePlay}>{playControlState}</button>
      <button style={{width: '80px'}} onClick={handleNextGeneration}>Next step</button>
      <p><b>{'Generation: '}</b>{generationState}</p>
      <p><b>{'Population: '}</b>{getPopulation(boardState)}</p>
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