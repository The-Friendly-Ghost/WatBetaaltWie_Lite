import PropTypes from "prop-types";
import { useState } from "react";
import Button from "../elements/Button.jsx";
import Menu from "./MenuModal.jsx";
import PlusIcon from "../assets/plus.svg?react";
import MenuIcon from "../assets/hamburger.svg?react";
import AddModal from "./AddModal.jsx";
import Modal from "./Modal.jsx";

export default function Footer({ setCurrentTab, users, setUsers }) {
  const [menuOpen, setMenuOpen] = useState(0);

  return (
    <>
      {menuOpen > 0 && (
        <div className="absolute inset-0 bg-black/10 backdrop-blur-[4px] z-1" />
      )}
      <div className="z-10 absolute w-full bottom-0 flex px-5 pb-5 gap-3 justify-between items-center">
        <div>
          {menuOpen !== 1 && (
            <Button
              aria="Add"
              onClick={() => {
                setMenuOpen((menuOpen) => (menuOpen === 2 ? 0 : 2));
              }}
            >
              <PlusIcon />
            </Button>
          )}
        </div>
        <div>
          {menuOpen !== 2 && (
            <Button
              aria="Open Menu"
              onClick={() => {
                setMenuOpen((menuOpen) => (menuOpen === 1 ? 0 : 1));
              }}
            >
              <MenuIcon />
            </Button>
          )}
        </div>
        {menuOpen === 1 && (
          <Modal>
            <Menu setCurrentTab={setCurrentTab} setMenuOpen={setMenuOpen} />
          </Modal>
        )}
        {menuOpen === 2 && (
          <AddModal
            setMenuOpen={setMenuOpen}
            users={users}
            setUsers={setUsers}
          />
        )}
      </div>
    </>
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
