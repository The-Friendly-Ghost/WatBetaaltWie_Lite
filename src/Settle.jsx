import PropTypes from "prop-types";
import { useState, useEffect } from "react";

export default function Settle({ users }) {
  const [settlements, setSettlements] = useState([]);

  useEffect(() => {
    calculateSettlements();
  }, [users]);

  const calculateSettlements = function () {
    let tempUsers = users.map((user) => ({
      id: user.id,
      name: user.name,
      balance: user.balance,
    }));

    const newSettlements = [];

    while (tempUsers.some((user) => Math.abs(user.balance) > 0.1)) {
      tempUsers.sort((a, b) => a.balance - b.balance);
      const debtor = tempUsers[0];
      const creditor = tempUsers[tempUsers.length - 1];
      const amount = Math.min(Math.abs(debtor.balance), creditor.balance);
      if (amount > 0.01) {
        newSettlements.push({
          from: debtor.id,
          fromName: debtor.name,
          to: creditor.id,
          toName: creditor.name,
          amount: +amount.toFixed(2),
        });

        debtor.balance += amount;
        creditor.balance -= amount;
      }
    }
    setSettlements(newSettlements);
  };

  return (
    <div className="pt-16 space-y-2 p-5 pb-28 overflow-y-auto no-scrollbar">
      <h2 className="text-3xl font-bold pb-4">Afrekenen</h2>
      <div className="grid gap-4">
        {settlements.map((settlement, index) => (
          <div
            key={index}
            className="max-w-sm p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
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
            <div className="mt-4 flex justify-center">
              <span className="text-xl font-bold text-blue-600">
                €{settlement.amount.toFixed(2)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

Settle.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      balance: PropTypes.number.isRequired,
    })
  ).isRequired,
  setUsers: PropTypes.func.isRequired,
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
  setTransactions: PropTypes.func.isRequired,
};
