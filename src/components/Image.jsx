import PropTypes from "prop-types";
function Image({ className, src }) {
  return (
    <>
      <img className={className} src={src} />
    </>
  );
}
Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
};
export default Image;
