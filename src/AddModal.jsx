import PropTypes from "prop-types";
import ArrowRight from "./assets/arrow_right.svg?react";
import Button from "./Button.jsx";
import { useState } from "react";

export default function AddModal({ setMenuOpen, users, setUsers }) {
  const [addFriend, setAddFriend] = useState(false);
  const [friendName, setFriendName] = useState("");
  const [addTransaction, setaddTransaction] = useState(false);

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

  return (
    <div className="absolute bottom-24 px-5 left-0">
      <div className=" flex p-5 gap-3 justify-between items-center bg-black rounded-lg">
        {!addFriend && !addTransaction && (
          <ul className="w-full divide-y divide-gray-600">
            <li className="menu-li" onClick={() => setAddFriend(true)}>
              Voeg vriend toe
              <ArrowRight className="w-6 h-6 stroke-white" />
            </li>
            <li className="menu-li" onClick={() => setaddTransaction(true)}>
              Voeg betaling toe
              <ArrowRight className="w-6 h-6 stroke-white" />
            </li>
          </ul>
        )}
        {addFriend && (
          <div className="flex flex-col gap-2">
            <form
              className="flex flex-col gap-2 max-w-full"
              onSubmit={(e) => handleAddFriend(e)}
            >
              <div>
                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2">
                  <input
                    id="naam"
                    name="naam"
                    type="text"
                    value={friendName}
                    onChange={(e) => setFriendName(e.target.value)}
                    placeholder="Naam"
                    className="block min-w-0 max-w-54 py-1.5 h-16 pl-1 font-inter text-2xl focus:outline-none"
                  />
                </div>
              </div>
              <Button
                type="submit"
                secondary={true}
                aria="Add Friend"
                onClick={() => {}}
              >
                Voeg toe
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
