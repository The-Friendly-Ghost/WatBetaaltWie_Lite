import PropTypes from "prop-types";

export default function Friend({ name, sum }) {
  const amountFormatted = new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
  }).format(sum);

  return (
    <div className="max-w-sm p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <span
          className={`text-xl font-bold ${
            sum >= 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          {amountFormatted}
        </span>
      </div>
    </div>
  );
}

Friend.propTypes = {
  name: PropTypes.string.isRequired,
  sum: PropTypes.number.isRequired,
};
