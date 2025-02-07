import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import SingleSettle from "../components/SingleSettle";

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
        {settlements.map((settlement) => (
          <SingleSettle key={settlement.id} settlement={settlement} />
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
