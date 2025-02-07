import PropTypes from "prop-types";
import Card from "./card";

export default function Transaction({
  date,
  amount,
  paidBy,
  splitBetween,
  description,
}) {
  const amountFormatted = new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
  }).format(amount);

  const dateFormatted = date.toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Card>
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold text-gray-800">{description}</h3>
        <span className={`text-xl font-bold`}>{amountFormatted}</span>
      </div>
      <div className="text-sm text-gray-600">
        <p>Datum: {dateFormatted}</p>
        <p>Betaald door: {paidBy}</p>
        <p>Gedeeld met: {splitBetween.join(", ")}</p>
      </div>
    </Card>
  );
}

Transaction.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired, // PropTypes.Date bestaat niet, moet instanceOf(Date) zijn
  amount: PropTypes.number.isRequired,
  paidBy: PropTypes.string.isRequired,
  splitBetween: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string.isRequired,
};
