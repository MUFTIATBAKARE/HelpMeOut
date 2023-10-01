import PropTypes from "prop-types";

function Button({ text, ext_btn, onClick }) {
  return (
    <div>
      <button className={ext_btn} onClick={onClick}>
        {text}
      </button>
    </div>
  );
}
Button.propTypes = {
  text: PropTypes.string,
  ext_btn: PropTypes.string,
  onClick: PropTypes.function,
};
export default Button;
