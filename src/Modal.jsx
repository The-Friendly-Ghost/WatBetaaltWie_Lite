import PropTypes from "prop-types";

export default function Modal({ children }) {
  return (
    <div className="z-10 flex flex-col justify-end absolute inset-x-0 p-5 bottom-0">
      <div className="bg-white rounded-lg shadow-lg p-4">{children}</div>
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.node,
};
