import PropTypes from "prop-types";
import ArrowRight from "../assets/arrow_right.svg?react";
import Button from "../elements/Button.jsx";
import { useState } from "react";

export default function AddModal({ setMenuOpen, users, setUsers }) {
  const [addFriend, setAddFriend] = useState(false);
  const [friendName, setFriendName] = useState("");
  const [addTransaction, setAddTransaction] = useState(false);
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const handleAddFriend = function (e) {
    e.preventDefault();
    if (friendName.trim()) {
      const newId = "u" + (users.length + 1);
      const newUser = { id: newId, name: friendName, balance: 0 };
      setUsers([newUser, ...users]);
      setFriendName("");
      setMenuOpen(0);
    }
  };

  const handleAddTransaction = function (e) {
    e.preventDefault();
    if (amount && description.trim()) {
      setAmount("");
      setDescription("");
      setMenuOpen(0);
    }
  };

  return (
    <div className="absolute max-w-full bottom-24 px-5 left-0">
      <div className="p-5 gap-3 bg-black rounded-lg">
        {!addFriend && !addTransaction && (
          <ul className="w-full divide-y divide-gray-600">
            <li className="menu-li" onClick={() => setAddFriend(true)}>
              Voeg vriend toe
              <ArrowRight className="w-6 h-6 stroke-white" />
            </li>
            <li className="menu-li" onClick={() => setAddTransaction(true)}>
              Voeg betaling toe
              <ArrowRight className="w-6 h-6 stroke-white" />
            </li>
          </ul>
        )}
        {addFriend && (
          <div>
            <form
              className="flex flex-col gap-2"
              onSubmit={(e) => handleAddFriend(e)}
            >
              <div>
                <div className="rounded-md bg-white pl-3 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2">
                  <input
                    id="naam"
                    name="naam"
                    type="text"
                    value={friendName}
                    onChange={(e) => setFriendName(e.target.value)}
                    placeholder="Naam"
                    className="py-1.5 h-16 pl-1 font-inter text-2xl focus:outline-none"
                  />
                </div>
              </div>
              <Button type="submit" secondary={true} aria="Add Friend">
                Voeg toe
              </Button>
            </form>
          </div>
        )}
        {addTransaction && (
          <div>
            <form
              className="flex flex-col gap-2"
              onSubmit={(e) => handleAddTransaction(e)}
            >
              <div className="flex flex-row rounded-md items-center bg-white px-3 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2">
                <span className="text-2xl text-gray-500 pr-3 border-r">€</span>
                <input
                  id="bedrag"
                  name="bedrag"
                  type="number"
                  step="0.01"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Bedrag"
                  className="py-1.5 h-16 pl-3 font-inter w-full text-2xl focus:outline-none"
                />
              </div>
              <div className="flex items-center rounded-md bg-white px-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2">
                <input
                  id="omschrijving"
                  name="omschrijving"
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Omschrijving"
                  className="py-1.5 h-16 pl-1 w-full font-inter text-2xl focus:outline-none"
                />
              </div>
              <Button
                type="submit"
                secondary={true}
                aria="Add Transaction"
                onClick={() => {}}
              >
                Verder
              </Button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

AddModal.propTypes = {
  setMenuOpen: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      balance: PropTypes.number.isRequired,
    })
  ).isRequired,
  setUsers: PropTypes.func.isRequired,
};
