import PropTypes from "prop-types";

export default function Button({ children, aria, onClick, secondary = false }) {
  return (
    <button
      aria-label={aria}
      className={`min-w-16 h-16 rounded-lg cursor-pointer flex text-2xl justify-center items-center ${
        !secondary ? "text-white bg-black" : "text-black bg-white"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  aria: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  secondary: PropTypes.bool,
};
