import { useState } from "react";
import Footer from "../components/Footer.jsx";
import Friends from "./Friends.jsx";
import Transactions from "./Transactions.jsx";
import Settle from "./Settle.jsx";

import { mockUsers, mockTransactions } from "../data/mockData.js";

export default function App() {
  const [currentTab, setCurrentTab] = useState(1);
  const [users, setUsers] = useState(mockUsers);
  const [transactions, setTransactions] = useState(mockTransactions);

  return (
    <div className="mockup-phone">
      <div className="mockup-phone-camera"></div>
      <div className="mockup-phone-display overflow-auto no-scrollbar pt-12 relative">
        {currentTab === 1 && <Friends users={users} />}
        {currentTab === 2 && <Transactions transactions={transactions} />}
        {currentTab === 3 && <Settle users={users} />}
        <Footer
          setCurrentTab={setCurrentTab}
          users={users}
          setUsers={setUsers}
        />
      </div>
    </div>
  );
}
