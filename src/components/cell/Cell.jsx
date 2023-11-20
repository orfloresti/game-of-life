import styles from "./cell.module.scss";
import PropTypes from 'prop-types';

const Cell = ({ rowPosition, columnPosition, cellState, onCellClick}) => {

  const color = cellState ? `${styles.cell} ${styles.alive}`: `${styles.cell} ${styles.dead}`

  const handleCellClick = () => {
    onCellClick(rowPosition, columnPosition);
  }

  return(
    <div className={color} onClick={handleCellClick}>

    </div>
  )
}

export default Cell;

Cell.propTypes = {
  rowPosition: PropTypes.number,
  columnPosition: PropTypes.number,
  cellState: PropTypes.bool,
  onCellClick: PropTypes.func,
}