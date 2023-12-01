import PropTypes from "prop-types";
import styles from "./dock.module.scss";
import Step from "../../assets/icons/MdiSkipNext.svg";
import Information from "./information/Information";
import Button from "./controls/button/Button";
import Slider from "./controls/slider/Slider";

const Dock = ({
  boardState,
  generationState,
  playIconState,
  speedState,
  onNextGeneration,
  onChangeSpeed,
  onPlay,
}) => {
  return (
    <div className={styles.dock}>
      <div className={styles.dockContainer}>
        <section className={styles.dockControls}>
          <Button
            height="64px"
            title="Play/Pause"
            icon={playIconState}
            onClick={onPlay}
          />
          <Button
            height="40px"
            title="Next generation"
            icon={Step}
            onClick={onNextGeneration}
          />
          <Slider value={speedState} onChange={onChangeSpeed} />
        </section>

        <Information
          boardState={boardState}
          generationState={generationState}
        />
      </div>
    </div>
  );
};

export default Dock;

Dock.propTypes = {
  boardState: PropTypes.array,
  generationState: PropTypes.number,
  playIconState: PropTypes.string,
  speedState: PropTypes.string,
  onNextGeneration: PropTypes.func,
  onChangeSpeed: PropTypes.func,
  onPlay: PropTypes.func,
};
