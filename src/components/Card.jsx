import PropTypes from "prop-types";

export default function Card(props) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      {props.children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node,
};
