import PropTypes from 'prop-types';
import Cell from "../cell/Cell";
import { useState } from 'react';
import { generateMatrix } from '../../utils/matrix.util';
import { lifeStep } from '../../utils/game-of-life.mjs';

const Board = ({ rows, columns }) => {

  const [board, setBoard] = useState(generateMatrix(rows, columns));

  const handleClick = (rowPosition, columnPosition) => {
    const update = [...board];
    update[rowPosition][columnPosition] = !update[rowPosition][columnPosition]
    setBoard(update);
  }

  const handleNextStep = () => {
    const newBoardState = lifeStep(board);
    setBoard(newBoardState);
  }

  return (
    <>
      <button onClick={handleNextStep}>Next step</button>
      <table>
        {
          board.map((row, rowPosition) =>
            <tr key={`${rowPosition}`}>
              {row.map((_, columnPosition) =>
                <th key={`${columnPosition}`}>
                  <Cell
                    key={`${rowPosition} ${columnPosition}`}
                    rowPosition={rowPosition}
                    columnPosition={columnPosition}
                    cellState={board[rowPosition][columnPosition]}
                    onCellClick={handleClick}
                  />
                </th>
              )}
            </tr>
          )
        }
      </table>
    </>
  )
}

export default Board;

Board.propTypes = {
  rows: PropTypes.number,
  columns: PropTypes.number,
}