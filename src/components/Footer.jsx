import { useState } from "react";
import Menu from "./MenuModal.jsx";
import MenuIcon from "../assets/hamburger.svg?react";
import CloseIcon from "../assets/close.svg?react";

export default function Footer({ setCurrentTab, users, setUsers }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="sticky bottom-0 w-full z-5">
      <div className="flex mt-5 flex-col items-center justify-center relative">
        <div
          className={`absolute bottom-0 w-full transform transition-all duration-200 ease-in-out ${
            menuOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          }`}
        >
          <Menu setCurrentTab={setCurrentTab} setMenuOpen={setMenuOpen} />
        </div>
        <label className="btn mb-5 z-10 btn-circle btn-xl p-10 swap swap-rotate dropdown dropdown-top dropdown-center [&:after]:hidden transform transition-all duration-300 ease-in-out">
          <input
            type="checkbox"
            checked={menuOpen}
            onChange={(e) => setMenuOpen(e.target.checked)}
          />
          <MenuIcon className="swap-off fill-current" />
          <CloseIcon className="swap-on fill-current" />
        </label>
      </div>
    </div>
  );
}
