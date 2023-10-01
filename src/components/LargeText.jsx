import PropTypes from "prop-types";

function LargeText({ text, className }) {
  return (
    <>
      <p className={className}>{text}</p>
    </>
  );
}
LargeText.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
};
export default LargeText;
