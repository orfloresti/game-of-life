import PropTypes from 'prop-types';
import styles from "./information.module.scss";
import { getPopulation } from "../../../utils/game-of-life";

const Information = ({ generationState, boardState }) => {
  return(
    <div className={styles.dockInfo}>
      <p className={styles.title}>{`Conway's Game Of Life`}</p>
      <p>
        <span className={styles.subtitle}>{'Generation: '}</span>{generationState}
        <span>{' '}</span>
        <span className={styles.subtitle}>{'Population: '}</span>{getPopulation(boardState)}
      </p>
    </div>
  )
}

export default Information;

Information.propTypes = {
  boardState: PropTypes.array,
  generationState: PropTypes.number,
}