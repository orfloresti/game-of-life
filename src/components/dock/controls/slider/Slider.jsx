import PropTypes from "prop-types";
import styles from "./slider.module.scss";

const Slider = ({ value, onChange }) => {
  return (
    <div className={styles.control}>
      <input
        type="range"
        min="1"
        max="100"
        title="Speed"
        value={value}
        onChange={onChange}
        className={styles.speed}
      />
    </div>
  );
};

export default Slider;

Slider.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
