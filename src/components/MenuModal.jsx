import PropTypes from "prop-types";
import ArrowRight from "../assets/arrow_right.svg?react";

export default function MenuModal({ setCurrentTab, setMenuOpen }) {
  const handleTabChange = (tabNumber) => {
    setCurrentTab(tabNumber);
    setMenuOpen(0);
  };

  return (
    <ul className="w-full divide-y divide-gray-600">
      <li className="menu-li" onClick={() => handleTabChange(1)}>
        Vrienden
        <ArrowRight className="w-6 h-6 stroke-white" />
      </li>
      <li className="menu-li" onClick={() => handleTabChange(2)}>
        Betalingen
        <ArrowRight className="w-6 h-6 stroke-white" />
      </li>
      <li className="menu-li" onClick={() => handleTabChange(3)}>
        Afrekenen
        <ArrowRight className="w-6 h-6 stroke-white" />
      </li>
    </ul>
  );
}

MenuModal.propTypes = {
  setCurrentTab: PropTypes.func.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
};
