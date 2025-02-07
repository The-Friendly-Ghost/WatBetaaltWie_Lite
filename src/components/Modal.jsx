import PropTypes from "prop-types";

export default function Modal(props) {
  return (
    <div className="absolute bottom-24 px-5 w-full left-0">
      <div className=" flex p-5 gap-3 justify-between items-center bg-black rounded-lg">
        {props.children}
      </div>
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.node,
};
