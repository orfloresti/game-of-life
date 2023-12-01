import PropTypes from 'prop-types';
import Cell from "./cell/Cell";

const Board = ({ boardState, onCellClick }) => {

  return (
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
  )
}

export default Board;

Board.propTypes = {
  boardState: PropTypes.array,
  onCellClick: PropTypes.func,
}