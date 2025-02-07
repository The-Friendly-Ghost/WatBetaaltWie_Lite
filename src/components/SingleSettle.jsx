import PropTypes from "prop-types";
import Card from "./card";
import Button from "../elements/Button.jsx";

export default function SingleSettle({ settlement }) {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-sm text-gray-500">Van</span>
          <span className="text-lg font-semibold text-gray-800">
            {settlement.fromName}
          </span>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-sm text-gray-500">Naar</span>
          <span className="text-lg font-semibold text-gray-800">
            {settlement.toName}
          </span>
        </div>
      </div>
      <div className="mt-4 flex justify-between">
        <span className="text-xl font-bold text-blue-600">
          €{settlement.amount.toFixed(2)}
        </span>
        <div>
          <button>Betaald</button>
        </div>
      </div>
    </Card>
  );
}

SingleSettle.propTypes = {
  settlement: PropTypes.shape({
    from: PropTypes.string.isRequired,
    fromName: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    toName: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  }).isRequired,
};
