import Friend from "../components/SingleFriend.jsx";
import PropTypes from "prop-types";

export default function Friends({ users }) {
  return (
    <div className="pt-16 space-y-2 p-5 pb-28 overflow-y-auto no-scrollbar">
      <h2 className="text-3xl font-bold pb-4">Vrienden</h2>
      {users.map((user) => (
        <Friend key={user.id} name={user.name} sum={user.balance} />
      ))}
    </div>
  );
}

Friends.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      balance: PropTypes.number.isRequired,
    })
  ).isRequired,
};
