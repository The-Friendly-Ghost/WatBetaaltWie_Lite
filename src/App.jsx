import { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Friends from "./Friends.jsx";
import Transactions from "./Transactions.jsx";
import Settle from "./Settle.jsx";

import { mockUsers, mockTransactions } from "./mockData.js";

export default function App() {
  const [currentTab, setCurrentTab] = useState(1);
  const [users, setUsers] = useState(mockUsers);
  const [transactions, setTransactions] = useState(mockTransactions);

  // return <div>Hello, World!</div>;

  return (
    <div className="relative flex flex-col h-full min-h-[650px] overflow-hidden rounded-lg">
      <Header />
      {currentTab === 1 && <Friends users={users} />}
      {currentTab === 2 && <Transactions transactions={transactions} />}
      {currentTab === 3 && <Settle users={users} />}
      <Footer setCurrentTab={setCurrentTab} users={users} setUsers={setUsers} />
    </div>
  );
}
