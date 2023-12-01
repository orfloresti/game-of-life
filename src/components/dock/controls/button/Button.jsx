import PropTypes from 'prop-types';
import styles from "./button.module.scss";

const Button = ({icon, height, title, onClick}) => {
  return (
    <button className={styles.control} onClick={onClick} title={title}>
      <img src={icon} height={height} />
    </button>
  )
}

export default Button;

Button.propTypes = {
  icon: PropTypes.string, 
  height: PropTypes.string, 
  title: PropTypes.string, 
  onClick: PropTypes.func,
}