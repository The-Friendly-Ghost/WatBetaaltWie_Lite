import PropTypes from "prop-types";
import Transaction from "../components/SingleTransaction.jsx";

export default function Transactions({ transactions }) {
  return (
    <div className="pt-16 space-y-2 p-5 pb-28 overflow-y-auto no-scrollbar">
      <h2 className="text-3xl font-bold pb-4">Betalingen</h2>
      {transactions.map((transaction) => (
        <Transaction
          key={transaction.id}
          date={transaction.date}
          amount={transaction.amount}
          paidBy={transaction.paidBy}
          splitBetween={transaction.splitBetween}
          description={transaction.description}
        />
      ))}
    </div>
  );
}

Transactions.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      date: PropTypes.instanceOf(Date).isRequired,
      amount: PropTypes.number.isRequired,
      paidBy: PropTypes.string.isRequired,
      splitBetween: PropTypes.arrayOf(PropTypes.string).isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};
