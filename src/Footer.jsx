import PropTypes from "prop-types";
import { useState } from "react";
import Button from "./Button.jsx";
import MenuModal from "./MenuModal.jsx";
import PlusIcon from "./assets/plus.svg?react";
import MenuIcon from "./assets/hamburger.svg?react";
import AddModal from "./AddModal.jsx";

export default function Footer({ setCurrentTab, users, setUsers }) {
  const [menuOpen, setMenuOpen] = useState(0);

  return (
    <div className="absolute w-full bottom-0 flex px-5 pb-5 gap-3 justify-between items-center">
      <Button
        aria="Add"
        onClick={() => {
          setMenuOpen((menuOpen) => (menuOpen === 2 ? 0 : 2));
        }}
      >
        <PlusIcon />
      </Button>
      <Button
        aria="Open Menu"
        onClick={() => {
          setMenuOpen((menuOpen) => (menuOpen === 1 ? 0 : 1));
        }}
      >
        <MenuIcon />
      </Button>
      {menuOpen === 1 && (
        <MenuModal setCurrentTab={setCurrentTab} setMenuOpen={setMenuOpen} />
      )}
      {menuOpen === 2 && (
        <AddModal setMenuOpen={setMenuOpen} users={users} setUsers={setUsers} />
      )}
    </div>
  );
}

Footer.propTypes = {
  setCurrentTab: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      balance: PropTypes.number.isRequired,
    })
  ).isRequired,
  setUsers: PropTypes.func.isRequired,
};
