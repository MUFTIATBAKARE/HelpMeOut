import PropTypes from "prop-types";

function SmallText({ text, className }) {
  return (
    <>
      <p className={className}>{text}</p>
    </>
  );
}
SmallText.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
};
export default SmallText;
