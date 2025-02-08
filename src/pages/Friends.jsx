/* eslint-disable react/prop-types */
import Friend from "../components/SingleFriend.jsx";

export default function Friends({ users }) {
  return (
    <div className="space-y-2 overflow-y-auto w-full">
      <h2 className="text-3xl font-bold pb-4 pl-8">Vrienden</h2>
      {users.map((user) => (
        <Friend key={user.id} name={user.name} sum={user.balance} />
      ))}
    </div>
  );
}
